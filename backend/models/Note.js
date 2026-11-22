import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 100 },
    content: { type: String, default: "", trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("Note", noteSchema);
