import { useState } from "react";
import { postPdf } from "./utils/api";
import PdfViewer from "./components/PdfViewer";
import PdfUploader from "./components/PdfUploader";

const App = () => {
  const [pdfUrl, setPdfUrl] = useState<string>("");

  const pdfUploading = async (file: File) => {
    postPdf(file)
      .then((res) => {
        setPdfUrl(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-center h-full w-700 m-auto box-content px-30">
      <p className="text-center text-30 py-30 shrink-0">PDF Viewer</p>
      <PdfUploader pdfUploading={pdfUploading} />
      {pdfUrl && <PdfViewer pdfUrl={pdfUrl} />}
    </div>
  );
};

export default App;
