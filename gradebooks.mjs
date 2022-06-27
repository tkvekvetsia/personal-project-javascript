import { validatePerson} from "./validator.mjs";
import { Groups } from "./groups.mjs";
export class Gradebooks{
    static counter = 1;
    static gradebooksDb = new Map();

    constructor(groups, teachers, lms){
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    add(groupId){
        if(typeof groupId !== 'string'){
            throw new Error('groupid is not a string');
        }
        if(!Groups.groups.get(groupId)){
            throw new Error("group id is not valid");
        }
        let id = String(Gradebooks.counter++)
        let obj = this.groups.read(groupId);
        delete obj.id;
        Gradebooks.gradebooksDb.set(id, {});
        return id;
    }

    clear(){
        Gradebooks.gradebooksDb.clear();
    }

    


}