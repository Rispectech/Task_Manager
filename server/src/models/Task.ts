import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: String,
  corrected: Boolean,
});

export default mongoose.model("Task", TaskSchema);
