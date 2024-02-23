import db from '../db-config';

// create all the stuffs with db object from db directory
// and export the model

class todoModel {
    public static table = 'todo';

    public static async getAllToDos() {
        const allToDos = await db(this.table).select();
        return allToDos;
    } 

    public static async getId(title?: string) {
        const getToDoId = await db(this.table).where("title",title).select("id");
        return getToDoId;
    }
    
    public static async createToDo(todo?: {title: string, description: string, status: string}) {
        const createdToDo = await db(this.table).insert({todo}).returning("*");
        return createdToDo;
    }

    public static async updateToDo(id?: BigInteger, updates?: {title: string, description: string, status: string}) {
        const updatedToDo = await db(this.table).where({id}).update({updates}).returning("*");
        return updatedToDo;
    }

    public static async deleteToDo(id?: BigInt) {
        const deletedToDo = await db(this.table).where({id}).del();
        return deletedToDo;
    }
}

export default todoModel