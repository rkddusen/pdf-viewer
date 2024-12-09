import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8888",
});

export const postPdf = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return instance.post(`/api/upload-pdf`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
