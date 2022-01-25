import mongoose from "mongoose";

const ConnectServerString =
  "mongodb+srv://Rishabh:<password></password>@nodeexpressprojects.yil9q.mongodb.net/3-Task-Manager?retryWrites=true&w=majority";

mongoose.connect(ConnectServerString);
