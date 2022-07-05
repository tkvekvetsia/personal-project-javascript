import { Subj, Id, Lap } from "./interfaces";

export class Subject{
    static counter: number = 1;
     #id = String(Subject.counter);
     public title: string;
     public lessons: number;
     public description: string

    constructor(subj: Subj){    
        this.title = subj.title;
        this.lessons = subj.lessons;
        if(subj.description){
            this.description =subj.description
        }
        Subject.counter++
    }
    get id(): string{
        return this.#id
    }
}


export class LMS{
    static counter: number = 1;
    static subjects:Map<string, Subj & Id> = new Map();

    public add(subj: Subject): string{
        let obj: Subj & Id = {
            title: subj.title,
            lessons: subj.lessons,
            id: subj.id,
            // #id: subj.id
        }
        if(subj.description){
            obj.description = subj.description
        }
        
        LMS.subjects.set(subj.id, obj);
        return subj.id;
    }

    public remove(subj: Subject): void{
        LMS.subjects.delete(subj.id);
    }

    public verify(subj: Subject): boolean{
        return LMS.subjects.has(subj.id);
   }

   public readAll(){
        return[...LMS.subjects.values()]
   }
}