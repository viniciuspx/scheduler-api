import mongoose from "mongoose";

export const ListSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  list: [
    {
      time: { type: String, required: true },
      task: { type: String, required: true },
    },
  ],
});
