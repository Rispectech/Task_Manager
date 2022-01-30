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
const getAllItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTask = yield Task_1.default.find({});
        res.status(201).json(allTask);
    }
    catch (error) {
        res.status(500).json({ type: error.name, msg: error.message });
    }
    next();
});
exports.getAllItems = getAllItems;
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const NewSchema = yield Task_1.default.create(req.body);
        res.status(201).json(NewSchema);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ type: error.name, msg: error.message });
    }
    next();
});
exports.createTask = createTask;
const getTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const SingleTask = yield Task_1.default.findOne({ _id: req.params.id }).exec();
        if (!SingleTask)
            return res
                .status(404)
                .json({ type: "Undefined", msg: `Task not found with id :${req.params.id}` });
        res.status(201).json(SingleTask);
    }
    catch (error) {
        res.status(500).json({ type: error.name, msg: error.message });
    }
    next();
});
exports.getTask = getTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const SingleTask = yield Task_1.default.findOneAndDelete({ _id: req.params.id });
        if (!SingleTask)
            return res
                .status(404)
                .json({ type: "Undefined", msg: `Task not found with id :${req.params.id}` });
        res.status(201).json(SingleTask);
    }
    catch (error) {
        res.status(500).json({ type: error.name, msg: error.message });
    }
    next();
});
exports.deleteTask = deleteTask;
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const UpdateTask = yield Task_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        }).exec();
        if (!UpdateTask)
            return res
                .status(404)
                .json({ type: "Undefined", msg: `Task not found with id :${req.params.id}` });
        res.status(201).json(UpdateTask);
    }
    catch (error) {
        res.status(500).json({ type: error.name, msg: error.message });
    }
    next();
});
exports.updateTask = updateTask;
//# sourceMappingURL=task.js.map