"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = exports.getAllItems = void 0;
const getAllItems = (req, res, next) => {
    res.send("all items");
    next();
};
exports.getAllItems = getAllItems;
const createTask = (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
    next();
};
exports.createTask = createTask;
const getTask = (req, res, next) => {
    res.json({ id: req.params.id });
    next();
};
exports.getTask = getTask;
const updateTask = (req, res, next) => {
    res.send("update items");
    next();
};
exports.updateTask = updateTask;
const deleteTask = (req, res, next) => {
    res.send("delete items");
    next();
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.js.map