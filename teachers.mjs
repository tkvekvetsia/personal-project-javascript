import { validateTeacher } from "./validator.mjs";

export class Teachers{
    static counter = 1;
    static teachers = new Map()

    add(data){
        validateTeacher(data);
        let id = String(Teachers.counter++);
        Teachers.teachers.set(id, data);
        return id;
    }

    read(id){
        if(typeof id !== "string") throw new Error("id is required and it must be a string");
        if(Teachers.teachers.has(id)){
            return {id: {...Teachers.teachers.get(id)}};
        }else{
            return null;
        }
    }
}