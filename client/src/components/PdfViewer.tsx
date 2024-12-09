import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface PdfViewerProps {
  pdfUrl: string;
}
const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  const viewerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPdf = async () => {
      if (!pdfUrl) return;

      const container = viewerContainerRef.current;
      if (!container) {
        return;
      }

      const pdfDoc = await pdfjsLib.getDocument(pdfUrl).promise;

      const paintBlank = (): void => {
        const blank = document.createElement("div");
        blank.style.height = "20px";
        blank.style.backgroundColor = "#e0e0e0";
        container.appendChild(blank);
      };

      paintBlank();
      let save = false;
      const _extractedText: [string, string][] = [];
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);

        const textContent = await page.getTextContent();
        let leftText: string = "";
        let rightText: string = "";
        let prevY: number = 0;
        textContent.items.forEach((item: any) => {
          if (save) {
            if (prevY !== 0 && prevY !== item.transform[5]) {
              leftText += "\n";
              rightText += "\n";
              prevY = item.transform[5];
            }
            if (item.transform[4] < 300) {
              leftText += item.str;
            } else {
              rightText += item.str;
            }
          }
          if (item.str === "신·구조문대비표") {
            save = true;
          }
        });

        if (leftText || rightText) {
          _extractedText.push([leftText, rightText]);
        }

        const containerWidth = container.scrollWidth;
        const initialViewport = page.getViewport({ scale: 1 });
        const newScale = containerWidth / initialViewport.width;
        const viewport = page.getViewport({ scale: newScale });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        if (!context) {
          return;
        }

        const renderContext = {
          canvasContext: context,
          viewport,
        };

        await page.render(renderContext).promise;

        container.appendChild(canvas);
        paintBlank();
      }
      console.log(_extractedText);
    };

    loadPdf().catch((error) => {
      console.error("PDF load fail:", error);
    });
  }, [pdfUrl]);

  return (
    <div className="m-auto my-10 w-700 h-full border border-gray-400 overflow-y-scroll bg-[#e0e0e0]">
      <div ref={viewerContainerRef} className="h-full m-auto w-600" />
    </div>
  );
};

export default PdfViewer;
