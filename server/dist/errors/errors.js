"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = exports.ErrorRoutes = exports.CreateErrorClass = void 0;
class ErrorClass extends Error {
    constructor(status, type, msg) {
        super(msg);
        this.status = status;
        this.type = type;
    }
}
const CreateErrorClass = (status, type, msg) => {
    return new ErrorClass(status, type, msg);
};
exports.CreateErrorClass = CreateErrorClass;
const ErrorRoutes = (req, res) => {
    res.status(404).send("Route not found");
};
exports.ErrorRoutes = ErrorRoutes;
const ErrorHandler = (error, req, res, next) => {
    if (error instanceof ErrorClass)
        res.status(error.status).json({ type: error.type, msg: error.message });
    return res.status(500).json({ type: "Undefined", msg: "Something went wrong ..." });
};
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=errors.js.map