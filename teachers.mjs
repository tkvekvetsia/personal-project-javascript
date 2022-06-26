import { validateTeacher } from "./validator.mjs";

export class Teachers{
    static counter = 1;
    static teachers = new Map();

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

    update(id, updateProfile){
        if(typeof id !== "string") throw new Error("id is required and it must be a string");
        if(!Teachers.teachers.has(id)) throw new Error ("invalid id");
        validateTeacher(updateProfile);
        Object.assign(Teachers.teachers.get(id), updateProfile);
        return id;
    }

    remove(id){
        if(typeof id !== "string") throw new Error("id is required and it must be a string");
        if(!Teachers.teachers.has(id)) throw new Error ("invalid id");
        return Teachers.teachers.delete(id);
    }

}