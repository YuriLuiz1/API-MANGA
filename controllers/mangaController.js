import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

export async function getAllManga(req, res) {
  const allMangas = await prisma.mangas.findMany();
  res.status(200).json(allMangas);
}

export async function creatingManga(req, res) {
  const createManga = await prisma.mangas.create({
    data: req.body,
  });
  res
    .status(201)
    .json({ message: "Manga created successfully", json: createManga });
}

export async function deleteManga(req, res) {
  const id = req.params.id;
  const deleteManga = await prisma.mangas.delete({
    where: { id: parseInt(id) },
  });
  res.status(200).json({ message: "Manga deleted successfully" });
}

export async function getMangaForId(req, res) {
  const id = req.params.id;
  const pegaManga = await prisma.mangas.findUnique({
    where: { id: parseInt(id) },
  });
  res.status(200).json(pegaManga);
}

export async function updateManga(req, res) {
  const id = req.params.id;
  const updateManga = await prisma.mangas.update({
    where: { id: parseInt(id) },
    data: req.body,
  });
  res
    .status(200)
    .json({ message: "Manga updated successfully", json: updateManga });
}
