"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        max: [20, "name cant be more than 20 characters"],
    },
    corrected: {
        type: Boolean,
        default: false,
    },
});
exports.default = mongoose_1.default.model("Task", TaskSchema);
//# sourceMappingURL=Task.js.map