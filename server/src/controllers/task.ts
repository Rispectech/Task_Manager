import { Response, Request, NextFunction } from "express";

const getAllItems = (req: Request, res: Response, next: NextFunction) => {
  res.send("all items");
  next();
};

const createTask = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.json(req.body);
  next();
};

const getTask = (req: Request, res: Response, next: NextFunction) => {
  // const data = req.params;
  // console.log(data);
  res.json({ id: req.params.id });
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
