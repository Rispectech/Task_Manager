import { Response, Request } from "express";
import express from "express";

import task from "./routes/tasks";

const app = express();

const port = 3000;

app.get("/start", (req: Request, res: Response) => {
  res.send("hello");
});

//middleware

app.use(express.json());

//routes

app.use("/api/v1/task", task);

app.listen(port, () => console.log(`server is listening on the port ${port}...`));
