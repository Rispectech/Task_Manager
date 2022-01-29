"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = exports.getAllItems = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const getAllItems = (req, res, next) => {
    res.send("all items");
    next();
};
exports.getAllItems = getAllItems;
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const NewSchema = yield Task_1.default.create(req.body);
        console.log(NewSchema);
        res.status(201).json(NewSchema);
    }
    catch (error) {
        console.log(error);
    }
    next();
});
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