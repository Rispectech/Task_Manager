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
const async_1 = require("../middleware/async");
const errors_1 = require("../errors/errors");
const getAllItems = (0, async_1.AsyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allTask = yield Task_1.default.find({});
    res.status(201).json(allTask);
}));
exports.getAllItems = getAllItems;
const createTask = (0, async_1.AsyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const NewSchema = yield Task_1.default.create(req.body);
    res.status(201).json(NewSchema);
}));
exports.createTask = createTask;
const getTask = (0, async_1.AsyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const SingleTask = yield Task_1.default.findOne({ _id: req.params.id }).exec();
    if (!SingleTask)
        return next((0, errors_1.CreateErrorClass)(505, "Undefined Document", `Task not found with id :${req.params.id}`));
    res.status(201).json(SingleTask);
    next();
}));
exports.getTask = getTask;
const deleteTask = (0, async_1.AsyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const SingleTask = yield Task_1.default.findOneAndDelete({ _id: req.params.id });
    if (!SingleTask)
        return next((0, errors_1.CreateErrorClass)(505, "Undefined Document", `Task not found with id :${req.params.id}`));
    res.status(201).json(SingleTask);
    next();
}));
exports.deleteTask = deleteTask;
const updateTask = (0, async_1.AsyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const UpdateTask = yield Task_1.default.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    }).exec();
    if (!UpdateTask)
        return next((0, errors_1.CreateErrorClass)(505, "Undefined Document", `Task not found with id :${req.params.id}`));
    res.status(201).json(UpdateTask);
    next();
}));
exports.updateTask = updateTask;
//# sourceMappingURL=task.js.map