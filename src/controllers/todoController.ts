import { toDoService } from "../services/todoService";
import {Request, Response, express} from 'express';


class todoController {
    async getToDoController(req?: Request, res?: Response) {
        try {
            const todos = await toDoService.getToDoService();
            res.send(200).json(todos);
        }
        catch(e) {
            res.status(500).json({message:"Error fetching the todos !!!"})
        }
        
    }

    async createToDoController(req?: Request, res?: Response) {
        const newToDo = req.body();
        try {
            const createdToDo = await toDoService.createToDoService(newToDo);
            res.send(200).json(createdToDo);
        } catch(e) {
            res.status(500).json({message:"Ërror creating new todo !!!"});
        }
    }

    async updateToDoController(req?: Request, res?: Response) {
        const id = req.params();
        const updates = req.body();
        try {
            const updatedToDo = await toDoService.updateToDoService(id,updates);
            res.send(200).json(updatedToDo);
        } catch(e) {
            res.status(500).json({message:"Error updating the todo !!!"})
        }
    }

    async deleteToDoController(req?: Request, res?: Response) {
        const id = req.params();
        try {
            const deletedToDo = await toDoService.deleteToDoService(id);
            res.send(200).json(deletedToDo);
        } catch(e) {
            res.status(500).json({message:"Error deleting  the todo !!!"})
        }
    }
}

export var toDoController = new todoController ;