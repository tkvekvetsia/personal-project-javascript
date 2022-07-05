import { Teacher, isDate, Id} from "./interfaces";

export class Teachers{
    static counter: number = 1;
    static teachers: Map<string, Teacher> = new Map();

    public add(data: Teacher): string{
        if(!isDate(data.dateOfBirth)){
            throw new Error("date of birth must be in format mm/dd/yyyy")
        }
        let id: string = String(Teachers.counter++);
        Teachers.teachers.set(id, data);
        return id;
    }

    public read(id: string):(Teacher & Id) | null{
        if(!Teachers.teachers.has(id)){
            return null
        }else{
            return {id, ...Teachers.teachers.get(id)}
        }
    }

    public update(id: string, updateProfile: Teacher): string{
        Teachers.teachers.set(id, updateProfile);
        return id;
    }

    public remove(id: string): boolean{
        if(!Teachers.teachers.has(id)) throw new Error ("invalid id");
        return Teachers.teachers.delete(id);
    }
}