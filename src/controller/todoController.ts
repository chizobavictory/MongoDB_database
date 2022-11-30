import { Request, Response } from "express";
import Todo from "../models/user";

export const createTodo = async (req: Request, res: Response) => {
    try{
        const tasks = await Todo.create(req.body)
    res.status(201).json({tasks})

    }catch(error){
        res.status(500).json({message: error})
    }
}

export const getAllTasks = async(req:Request, res: Response) => {
    try {
        const tasks = await Todo.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({message:error})

    }
    
}

export const getSingleTodo = async(req:Request, res:Response) => {
    try {
        const {id : taskID} = req.params
        const tasks = await Todo.findOne({_id:taskID})
       
        if (!tasks){
            return res.status(404).json({message:`No task with id:${taskID}`})

        }
        res.status(200).json({tasks})

    }catch(error){
        res.status(500).json({message: error})
    }

    res.json({id: req.params.id})
}

export const updateTodo = async(req:Request, res:Response) => { 
    try {
        const {id: taskID} = req.params;

        const tasks = await Todo.findOneAndUpdate({_id:taskID}, req.body,{
            new : true,
            runValidators:true,
        })

        if(!tasks){
        res.status(404).json({id:taskID, data:req.body})
        }
        res.status(200).json({tasks})

    }catch(error){
        res.status(500).json({message: error})
    }
    
}

export const deleteTodo = async(req:Request, res:Response) => {
    //res.send('delete tasks from the controller')
    try {
        const {id : taskID} = req.params
        const tasks = await Todo.findOneAndDelete({_id:taskID})
         if (!tasks){
            return res.status(404).json({message:`No task with id:${taskID}`})
        }
        res.status(200).json({tasks})

    }catch(error){
        res.status(500).json({message: error})
    }
}