import express from "express";
import { Response, Request } from "express";
import cors from "cors";

import router from "./routes/router";
import { connectDB } from "./db/db";
import { ErrorRoutes, ErrorHandler } from "./errors/errors";
require("dotenv").config();

const app = express();

const port = 3000;

app.get("/start", (req: Request, res: Response) => {
  console.log(connectDB);
  console.log(" good");
  res.send("hello is working server");
});

//middleware
app.use(cors()); //important when both server and clients are localhosts
app.use(express.json());

//routes
app.use("/api/v1/task", router);
app.use(ErrorRoutes);
// app.use(ErrorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is listening on the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
