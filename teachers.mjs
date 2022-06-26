import { validatePerson, validateTeacher } from "./validator.mjs";

export class Teachers{
    static counter = 1;
    static teachers = new Map();

    add(data){
        validatePerson(data);
        validateTeacher(data);
        let id = String(Teachers.counter++);
        Teachers.teachers.set(id, data);
        return id;
    }

    read(id){
        if(typeof id !== "string") throw new Error("id is required and it must be a string");
        let obj = {};
        obj= {id, ...Teachers.teachers.get(id)}
        if(Teachers.teachers.has(id)){
            return obj;
        }else{
            return null;
        }
    }

    update(id, updateProfile){
        if(typeof id !== "string") throw new Error("id is required and it must be a string");
        if(!Teachers.teachers.has(id)) throw new Error ("invalid id");
        validatePerson(updateProfile);
        validateTeacher(updateProfile);
        Teachers.teachers.set(id, updateProfile);
        return id;
    }

    remove(id){
        if(typeof id !== "string") throw new Error("id is required and it must be a string");
        if(!Teachers.teachers.has(id)) throw new Error ("invalid id");
        return Teachers.teachers.delete(id);
    }

}