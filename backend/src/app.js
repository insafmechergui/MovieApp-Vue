"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = express_1.default();
dotenv_1.default.config();
// const PORT = process.env.SERVER_PORT || 5000;
var PORT = 5000;
app.get('/', function (req, res) {
    res.send('hello world');
});
app.listen(PORT, function () { console.log("server is listening on " + PORT); });
