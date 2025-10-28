import PrismaClient from "@prisma/client";
import express from "express";
import {
  getAllManga,
  creatingManga,
  deleteManga,
  getMangaForId,
  updateManga,
} from "../controllers/mangaController.js";

const router = express.Router();

router.get("/mangas", getAllManga);
router.get("/mangas/:id", getMangaForId);
router.post("/mangas", creatingManga);
router.delete("/mangas/:id", deleteManga);
router.put("/mangas/:id", updateManga);

export default router;
