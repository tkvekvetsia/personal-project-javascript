import { validatePerson, validatePupil } from "./validator.mjs";
import { Pupils } from "./pupils.mjs";

export class Groups{
    static counter = 0;
    static groups = new Map();

    add(room){
        if(typeof  room !== 'number'){
            throw new TypeError("parameter is not a number")
        }
        let id = String(Groups.counter++);
        Groups.groups.set(id, {room: room, pupils: []});
        return id;
    }

    addPupil(groupId, pupil){
        if(typeof groupId !== 'string'){
            throw new Error("group id is not a string")
        }
        if(!Groups.groups.get(groupId))throw new Error('groupId is not valid')

        validatePerson(pupil);
        let keys = Object.getOwnPropertyNames(pupil).length; 
        if((keys > 5 && !pupil.description) || keys > 6) throw new Error("key is not valid");

        let pupilId = pupil.id
        Groups.groups.get(groupId).pupils.push({id : pupilId, ...pupil})
    }
    
    // removePupil(groupId, pupilId){
    //     if(typeof groupId !== 'string'){
    //         throw new Error("group id is not a string")
    //     }
    //     if(!Groups.groups.get(groupId))throw new Error('groupId is not valid')

    //     if(typeof pupilId !== 'string'){
    //         throw new TypeError("pupilId is not a string")
    //     }
    //     if(!Pupils.pupilsDb.get(pupilId)){
    //         throw new Error("pupilId is not valid")
    //     }


    // }


}