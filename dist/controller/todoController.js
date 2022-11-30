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
exports.deleteTodo = exports.updateTodo = exports.getSingleTodo = exports.getAllTasks = exports.createTodo = void 0;
const user_1 = __importDefault(require("../models/user"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield user_1.default.create(req.body);
        res.status(201).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.createTodo = createTodo;
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield user_1.default.find({});
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getAllTasks = getAllTasks;
const getSingleTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: taskID } = req.params;
        const tasks = yield user_1.default.findOne({ _id: taskID });
        if (!tasks) {
            return res.status(404).json({ message: `No task with id:${taskID}` });
        }
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
    res.json({ id: req.params.id });
});
exports.getSingleTodo = getSingleTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: taskID } = req.params;
        const tasks = yield user_1.default.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        });
        if (!tasks) {
            res.status(404).json({ id: taskID, data: req.body });
        }
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.send('delete tasks from the controller')
    try {
        const { id: taskID } = req.params;
        const tasks = yield user_1.default.findOneAndDelete({ _id: taskID });
        if (!tasks) {
            return res.status(404).json({ message: `No task with id:${taskID}` });
        }
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.deleteTodo = deleteTodo;
