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
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const db_1 = require("./db/db");
const app = (0, express_1.default)();
const port = 3000;
app.get("/start", (req, res) => {
    console.log(db_1.connectDB);
    console.log(" good");
    res.send("hello is working server");
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.connectDB)();
        app.listen(port, () => console.log(`server is listening on the port ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
});
app.use("/api/v1/task", router_1.default);
//# sourceMappingURL=app.js.map