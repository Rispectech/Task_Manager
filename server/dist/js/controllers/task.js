"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllItems = void 0;
const getAllItems = (req, res, next) => {
    res.send("all items");
    next();
};
exports.getAllItems = getAllItems;
