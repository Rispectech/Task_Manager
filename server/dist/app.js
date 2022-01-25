"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
require("./db/db");
const app = (0, express_1.default)();
const port = 3000;
app.get("/start", (req, res) => {
    res.send("hello");
});
app.use("/api/v1/task", router_1.default);
app.listen(port, () => console.log(`server is listening on the port ${port}...`));
//# sourceMappingURL=app.js.map