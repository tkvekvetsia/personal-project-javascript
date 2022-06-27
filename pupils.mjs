import { Subject } from "./lms.mjs";
import { validatePupil, validatePerson } from "./validator.mjs";

export class Pupils{
    static counter = 1;
    static pupilsDb = new Map();

    add(pupilData){
        validatePerson(pupilData);
        validatePupil(pupilData);

        let id = String(Pupils.counter++);
        let obj = {...pupilData};
        Pupils.pupilsDb.set(id, pupilData);

        return {id, ...obj};
    }

    read(id){
        if(typeof id !== "string") throw new Error("id is required and it must be a string");
        let obj = {};
        obj= {id, ...Pupils.pupilsDb.get(id)}
        if(Pupils.pupilsDb.has(id)){
            return obj;
        }else{
            return null;
        }
    }

    update(id, updateProfile){
        if(typeof id !== "string") throw new Error("id is required and it must be a string");
        if(!Pupils.pupilsDb.has(id)) throw new Error ("invalid id");
        validatePerson(updateProfile);
        validatePupil(updateProfile);
        Pupils.pupilsDb.set(id, updateProfile);
        return id;
    }

    remove(id){
        if(typeof id !== "string") throw new Error("id is required and it must be a string");
        if(!Pupils.pupilsDb.has(id)) throw new Error ("invalid id");
        return Pupils.pupilsDb.delete(id);
    }
    
}