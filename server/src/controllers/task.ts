import { Response, Request, NextFunction } from "express";
import TaskSchema from "../models/Task";

const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTask = await TaskSchema.find({});
    res.status(201).json(allTask);
  } catch (error: any) {
    res.status(500).json({ type: error.name, msg: error.message });
  }
  next();
};

const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const NewSchema = await TaskSchema.create(req.body);
    // console.log(NewSchema);
    res.status(201).json(NewSchema);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ type: error.name, msg: error.message });
  }
  next();
};

const getTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const SingleTask = await TaskSchema.findOne({ _id: req.params.id }).exec();
    if (!SingleTask)
      return res
        .status(404)
        .json({ type: "Undefined", msg: `Task not found with id :${req.params.id}` });
    res.status(201).json(SingleTask);
  } catch (error: any) {
    res.status(500).json({ type: error.name, msg: error.message });
  }
  next();
};

const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const SingleTask = await TaskSchema.findOneAndDelete({ _id: req.params.id });
    if (!SingleTask)
      return res
        .status(404)
        .json({ type: "Undefined", msg: `Task not found with id :${req.params.id}` });
    res.status(201).json(SingleTask);
  } catch (error: any) {
    res.status(500).json({ type: error.name, msg: error.message });
  }
  next();
};

const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const UpdateTask = await TaskSchema.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    }).exec();
    if (!UpdateTask)
      return res
        .status(404)
        .json({ type: "Undefined", msg: `Task not found with id :${req.params.id}` });
    res.status(201).json(UpdateTask);
  } catch (error: any) {
    res.status(500).json({ type: error.name, msg: error.message });
  }
  next();
};

export { getAllItems, createTask, getTask, updateTask, deleteTask };
