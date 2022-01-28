import express from "express";
import { Response, Request } from "express";

import router from "./routes/router";
import { connectDB } from "./db/db";
require("dotenv").config();

const app = express();

const port = 3000;

app.get("/start", (req: Request, res: Response) => {
  console.log(connectDB);
  console.log(" good");
  res.send("hello is working server");
});

//middleware

app.use(express.json());

//routes

const start = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await connectDB();
    app.listen(port, () => console.log(`server is listening on the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
app.use("/api/v1/task", router);
