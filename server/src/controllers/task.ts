import { Response, Request, NextFunction } from "express";
import TaskSchema from "../models/Task";
import { AsyncWrapper } from "../middleware/async";
import { CreateErrorClass } from "../errors/errors";

const getAllItems = AsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const allTask = await TaskSchema.find({});
  res.status(201).json(allTask);
});

const createTask = AsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  const NewSchema = await TaskSchema.create(req.body);
  // console.log(NewSchema);
  res.status(201).json(NewSchema);
});

const getTask = AsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const SingleTask = await TaskSchema.findOne({ _id: req.params.id }).exec();
  if (!SingleTask)
    return next(
      CreateErrorClass(505, "Undefined Document", `Task not found with id :${req.params.id}`)
    );
  res.status(201).json(SingleTask);
});

const deleteTask = AsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const SingleTask = await TaskSchema.findOneAndDelete({ _id: req.params.id });
  if (!SingleTask)
    return next(
      CreateErrorClass(505, "Undefined Document", `Task not found with id :${req.params.id}`)
    );
  res.status(201).json(SingleTask);
});

const updateTask = AsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const UpdateTask = await TaskSchema.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  }).exec();
  if (!UpdateTask)
    return next(
      CreateErrorClass(505, "Undefined Document", `Task not found with id :${req.params.id}`)
    );
  res.status(201).json(UpdateTask);
});

export { getAllItems, createTask, getTask, updateTask, deleteTask };
