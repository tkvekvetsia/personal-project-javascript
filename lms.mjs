import { validateSubject, lmsSubjValidator, objEqual} from "./validator.mjs";

export class Subject{
    static counter = 0;
    #id = String(Subject.counter);
    constructor(subj){    
        validateSubject(subj);
        Object.assign(this, subj)
        Subject.counter++
        // let id = (String(Subject.counter++));
    }
    get id(){
        return this.#id
    }
}



export class LMS{
    static counter = 1;
    static subjects = new Map();

    add(subj){
        lmsSubjValidator(subj);
        let id = String(LMS.counter++);
        LMS.subjects.set(id, subj)
    }

    verify(subj){
        lmsSubjValidator(subj);
        let result = false;


        LMS.subjects.forEach((value, key) => {
            if(objEqual(subj, value)){
                result = true;
            }
        })
        return result;
    }

    remove(subj){
        lmsSubjValidator(subj);
        LMS.subjects.forEach((value, key) => {
            if(objEqual(subj, value)){
                LMS.subjects.delete(key)

            }
        })
    }
    
    readAll(){
        if(arguments.length > 0) throw new Error('Argument was passed to the method');
        const arr = [];
        LMS.subjects.forEach((value, id)=>{
            arr.push({id, ...value})
        })
        return arr;
    }
}