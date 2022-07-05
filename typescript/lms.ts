import { Subj } from "./interfaces";

export class Subject{
    static counter: number = 1;
     #subjectid = String(Subject.counter);

    constructor(subj: Subj){    
        Object.assign(this, subj)
        Subject.counter++
    }
    get id(): string{
        return this.#subjectid
    }
}


export class LMS{
    static counter: number = 1;
    static subjects = new Map();

    public add(subj: Subject): string{
        LMS.subjects.set(subj.id, {id: subj.id, ...subj});
        return subj.id;
    }

    public remove(subj: Subject){
        LMS.subjects.delete(subj.id);
    }

    public verify(subj: Subject): boolean{
        return LMS.subjects.has(subj.id);
   }

   public readAll(): (Subj &{id : string})[]{
        return[...LMS.subjects.values()]
   }
}