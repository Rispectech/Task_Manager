"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectServerString = "mongodb+srv://Rishabh:123@nodeexpressprojects.yil9q.mongodb.net/3-Task-Manager?retryWrites=true&w=majority";
mongoose_1.default.connect(ConnectServerString);
//# sourceMappingURL=db.js.map