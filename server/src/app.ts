import express from "express";
import { Response, Request } from "express";

import router from "./routes/router";
require("./db/db");

const app = express();

const port = 3000;

app.get("/start", (req: Request, res: Response) => {
  res.send("hello");
});

//middleware

// app.use(express.json());

//routes

app.use("/api/v1/task", router);

app.listen(port, () => console.log(`server is listening on the port ${port}...`));
