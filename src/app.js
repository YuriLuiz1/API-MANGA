import { PrismaClient } from "@prisma/client";
import express from "express";
import router from "../routes/mangaRoutes.js";

const app = express();
app.use(express.json());

app.use(router);

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.status(200).send("API está rodando nessa porta");
});

export default app;
