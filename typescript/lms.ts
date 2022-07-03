import { subject } from "./interfaces";

export class Subject{
    static counter: number = 1;
    static subjectid = String(Subject.counter);

    constructor(subj: subject){    
        Object.assign(this, subj)
        Subject.counter++
    }
    get id(): string{
        return Subject.subjectid
    }
}