import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [20, "name cant be more than 20 characters"],
  },
  corrected: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Task", TaskSchema);
