import { validatePerson, validatePupil } from "./validator.mjs";
import { Pupils } from "./pupils.mjs";

export class Groups{
    static counter = 0;
    static groups = new Map();

    #validateGroupId(groupId){
        if(typeof groupId !== 'string'){
            throw new Error("group id is not a string");
        }
        if(!Groups.groups.get(groupId))throw new Error('groupId is not valid');
    }

    add(room){
        if(typeof  room !== 'number'){
            throw new TypeError("parameter is not a number");
        }
        let id = String(Groups.counter++);
        Groups.groups.set(id, {room: room, pupils: []});
        return id;
    }

    addPupil(groupId, pupil){
       this.#validateGroupId(groupId)

        validatePerson(pupil);
        let keys = Object.getOwnPropertyNames(pupil).length; 
        if((keys > 5 && !pupil.description) || keys > 6) throw new Error("key is not valid");

        let pupilId = pupil.id;
        Groups.groups.get(groupId).pupils.push({id : pupilId, ...pupil});
    }
    
    removePupil(groupId, pupilId){
       this.#validateGroupId(groupId)

        if(typeof pupilId !== 'string'){
            throw new TypeError("pupilId is not a string");
        }
        if(!Pupils.pupilsDb.get(pupilId)){
            throw new Error("pupilId is not valid");
        }


        let arrOfPupils = Groups.groups.get(groupId).pupils;
        for (let i = 0; i < arrOfPupils.length; i++){
            if(arrOfPupils[i].id){
                arrOfPupils.splice(i, 1);
            }
        }
    }

    update(groupId, updateInfo){
        this.#validateGroupId(groupId);

        if(typeof updateInfo !== 'object'|| Array.isArray(updateInfo) || updateInfo === null){
            throw new TypeError ("Parameter is not an object");
        }

        if(!updateInfo.room || typeof updateInfo.room !== 'number'){
            throw new Error('room is required and it must be a number')
        }

        Groups.groups.get(groupId).room = updateInfo.room
    }

    read(groupID){
        this.#validateGroupId(groupID);
        let obj = {}
        let id = groupID;
        obj = {id, ...Groups.groups.get(groupID)}
        return obj;
    }

}