"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const board_1 = __importDefault(require("./routes/board"));
const stage_1 = __importDefault(require("./routes/stage"));
const card_1 = __importDefault(require("./routes/card"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/boards', board_1.default);
app.use('/stages', stage_1.default);
app.use('/cards', card_1.default);
mongoose_1.default.connect('mongodb://localhost/in-progress', { useNewUrlParser: true, useUnifiedTopology: true });
exports.default = app;
