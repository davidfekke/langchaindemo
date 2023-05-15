import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const loader = new PDFLoader("pilot_handbook.pdf");

const docs = await loader.load();

console.log(docs);