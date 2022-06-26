import { validatePerson, validatePupil } from "./validator.mjs";
import { Pupils } from "./pupils.mjs";

export class Groups{
    static counter = 0;
    static rooms = new Map();

    add(room){
        if(typeof  room !== 'number'){
            throw new TypeError("parameter is not a number")
        }
        let id = String(Groups.counter++);
        Groups.rooms.set(id, {room: room});
        return id;
    }

    addPupil(groupId, pupil){
        if(typeof groupId !== 'string'){
            throw new Error("group id is not a string")
        }
        validatePerson(pupil);
        let keys = Object.getOwnPropertyNames(pupil).length; 
        if((keys > 5 && !pupil.description) || keys > 6) throw new Error("key is not valid");
        let obj = {}
        obj[pupil.id] =pupil
        Groups.rooms.set(groupId,  {...Groups.rooms.get(groupId), ...obj})
    }


}