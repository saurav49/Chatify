import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDb } from "./db/index";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

connectToDb();

app.get("/", (_: Request, res: Response) => {
  res.send("Chatify::Backend");
});

app.get("/health", (_: Request, res: Response) => {
  res.send("Working!!");
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
