import { validateSubject, lmsSubjValidator } from "./validator.mjs";
export class Subject{
    static counter = 1;
    constructor(subj){
        validateSubject(subj);
        this.id = String(Subject.counter++);
        Object.assign(this, subj)
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
}