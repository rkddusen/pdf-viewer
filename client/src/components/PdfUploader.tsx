import React, { useState } from "react";

interface PdfUploaderProps {
  pdfUploading: (file: File) => void;
}
const PdfUploader = ({ pdfUploading }: PdfUploaderProps) => {
  const [pdfName, setPdfName] = useState<string>("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPdfName(file.name);
      pdfUploading(file);
    }
  };
  return (
    <div className="shrink-0">
      <div className="flex justify-center items-center px-10 gap-10">
        <input
          className="border border-gray-400 max-w-400 w-full h-40 px-5 text-14 text-ellipsis overflow-hidden"
          disabled
          value={pdfName}
          placeholder="첨부 파일"
        />
        <label
          className="border border-gray-400 h-40 bg-gray-400 text-white text-14 px-20 flex justify-center items-center shrink-0 hover:cursor-pointer"
          htmlFor="file"
        >
          파일 선택
        </label>
      </div>
      <input
        className="hidden"
        id="file"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default PdfUploader;
