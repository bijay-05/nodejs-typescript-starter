// import todoModels and just return the data for each service
// create a class todoService and have different functions to return the data
// required by controllers
import todoModel from "../models/todoModels"


class todoService {
    async getToDoService() {
        return await todoModel.getAllToDos();
    }

    async getIdService(title?: string) {
        return await todoModel.getId();
    }

    async createToDoService(todo:{}) {
        return await todoModel.createToDo();
    }

    async updateToDoService(id: BigInt, updates: {}) {
        return await todoModel.updateToDo();
    }

    async deleteToDoService(id: BigInt) {
        return await todoModel.deleteToDo(id);
    }

}

export var toDoService = new todoService;
