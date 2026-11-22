import { Router } from "express";
import mongoose from "mongoose";
import Note from "../models/Note.js";

const router = Router();

// Reject malformed ids before they reach the database
const validId = (req, res, next) =>
  mongoose.isValidObjectId(req.params.id)
    ? next()
    : res.status(400).json({ message: "Invalid note id" });

// GET /api/notes - list all notes (newest first)
router.get("/", async (req, res, next) => {
  try {
    res.json(await Note.find().sort({ createdAt: -1 }));
  } catch (err) {
    next(err);
  }
});

// POST /api/notes - create a note
router.post("/", async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }
    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
});

// PUT /api/notes/:id - update a note
router.put("/:id", validId, async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/notes/:id - delete a note
router.delete("/:id", validId, async (req, res, next) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;
