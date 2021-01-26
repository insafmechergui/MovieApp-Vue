"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
// dotenv.config();
// var uri = process.env.SERVER_PORT 
// mongoose.connect(uri, 
//   {  useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }  
// );
var PORT = process.env.PORT || 5000;
// app.get('/', (req, res) => {
//   res.send('hello world');
// });
app.get('/status', function (req, res) {
    res.send({
        message: 'hellohhhh'
    });
});
app.listen(PORT, function () { console.log("server is listening on " + PORT); });
