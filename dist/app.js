"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
const app = (0, express_1.default)();
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection Successfull"))
    .catch((err) => console.log(err));
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/todo", user_1.default);
const PORT = 5500;
app.listen(process.env.PORT || 5500, () => {
    console.log(`Backend server is running on port: ${PORT}`);
});
