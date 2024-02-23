// have all your routes for different end points here 
// and export the router to main app.ts file

import {express} from 'express';
import { toDoController } from '../controller/todoController';

var router = express.Router();

// endpoint to get all the todos
router.get('/', toDoController.getToDoController());

// endpoint to create new todo
router.post('/', toDoController.createToDoController());

// endpoint to update existing todo
router.put('/', toDoController.updateToDoController());

// endpoint to delete todo
router.delete('/', toDoController.deleteToDoController());


export default router;