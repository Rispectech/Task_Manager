import { Response, Request, NextFunction } from "express";

const getAllItems = (req: Request, res: Response, next: NextFunction) => {
  res.send("all items");
  next();
};

const createTask = (req: Request, res: Response, next: NextFunction) => {
  res.send("create items");
  next();
};

const getTask = (req: Request, res: Response, next: NextFunction) => {
  res.send("get items");
  next();
};

const updateTask = (req: Request, res: Response, next: NextFunction) => {
  res.send("update items");
  next();
};

const deleteTask = (req: Request, res: Response, next: NextFunction) => {
  res.send("delete items");
  next();
};

export { getAllItems, createTask, getTask, updateTask, deleteTask };
