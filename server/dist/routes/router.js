"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_1 = require("../controllers/task");
const router = express_1.default.Router();
router.route("/").get(task_1.getAllItems).post(task_1.createTask);
router.route("/:id").get(task_1.getTask).delete(task_1.deleteTask).patch(task_1.updateTask);
exports.default = router;
//# sourceMappingURL=router.js.map