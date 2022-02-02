class ErrorClass extends Error {
  status: number;
  type: string;
  constructor(status, type, msg) {
    super(msg);
    this.status = status;
    this.type = type;
  }
}

const CreateErrorClass = (status, type, msg) => {
  return new ErrorClass(status, type, msg);
};

const ErrorRoutes = (req, res) => {
  return res.status(404).send("Route not found");
};

const ErrorHandler = (error, req, res, next) => {
  if (error instanceof ErrorClass)
    return res.status(error.status).json({ type: error.type, msg: error.message });
  return res.status(500).json({ type: "Undefined", msg: "Something went wrong ..." });
};

export { CreateErrorClass, ErrorRoutes, ErrorHandler };
