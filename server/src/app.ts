import express from "express";
import { Response, Request } from "express";

import router from "./routes/router";
import { connectDB } from "./db/db";

const app = express();

const port = 3000;

app.get("/start", (req: Request, res: Response) => {
  console.log(connectDB);
  console.log(" good");
  res.send("hello is not working server");
});

//middleware

// app.use(express.json());

//routes

app.use("/api/v1/task", router);

app.listen(port, () => console.log(`server is not listening on the port ${port}...`));
