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


export class LMS{
    static counter: number = 1;
    static subjects = new Map();

    public add(subj: Subject): void{
        LMS.subjects.set(subj.id, {id: subj.id, ...subj});
    }

    public remove(subj: Subject){
        LMS.subjects.delete(subj.id);
    }

    public verify(subj: Subject): boolean{
        return LMS.subjects.has(subj.id);
   }

   public readAll(): object[]{
        return[...LMS.subjects.values()]
   }
}