import mongoose from "mongoose";

const ConnectServerString =
  "mongodb+srv://Rishabh:132001@nodeexpressprojects.yil9q.mongodb.net/3-Task-Manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(ConnectServerString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

export { connectDB };
