import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const upload = multer({ dest: "uploads/" });
const __dirname = fileURLToPath(new URL(".", import.meta.url));

app.post("/api/upload-pdf", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).send("No file");
    }

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      file.filename
    }`;
    res.json({ url: fileUrl });
  } catch (error) {
    console.error("PDF upload error:", error);
    res.status(500).send("Internal server error");
  }
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
