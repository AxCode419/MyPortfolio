import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: "Qualification title is required",
  },
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  completion: {
    type: Date,
  },
  description: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Qualification", qualificationSchema);
