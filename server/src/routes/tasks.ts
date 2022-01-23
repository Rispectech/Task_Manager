import express from "express";
import { Request, Response } from "express";
import { getAllItems, getTask, createTask, updateTask, deleteTask } from "../controllers/task";
const router = express.Router();

router.route("/").get(getAllItems).post(createTask);

router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

export default router;
