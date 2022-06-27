import { validateSubject,  objEqual} from "./validator.mjs";

export class Subject{
    static counter = 0;
    #subjectid = String(Subject.counter);
    constructor(subj){    
        validateSubject(subj);
        Object.assign(this, subj)
        Subject.counter++
        // let id = (String(Subject.counter++));
    }
    get id(){
        return this.#subjectid
    }
}



export class LMS{
    static counter = 1;
    static subjects = new Map();

    add(subj){
        validateSubject(subj);
        let id = subj.id;
        LMS.subjects.set(id, subj)
    }

    verify(subj){
        validateSubject(subj);
        let result = false;
        for (let obj of LMS.subjects.values()){
            if(objEqual(subj, obj)){
                return true;
            }
        }
        return result;
    }

    remove(subj){
        validateSubject(subj);
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