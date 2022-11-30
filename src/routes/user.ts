import express from 'express';

import { createTodo, deleteTodo, getAllTasks, getSingleTodo, updateTodo } from '../controller/todoController';

const router = express.Router();

router.post('/create', createTodo)

router.get('/all', getAllTasks)

router.get('/:id', getSingleTodo)

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)


export default router;