import { Person, Id } from "./interfaces";

export class Pupils{
    static counter = 1;
    static pupilsDb: Map<string, Person> = new Map();

    public  add(pupilData: Person){
        let id: string = String(Pupils.counter++);
        Pupils.pupilsDb.set(id, pupilData)
        return {id, ...pupilData}
    }

    public read(id: string): (Id & Person){
        if(!Pupils.pupilsDb.has(id)){
            throw new Error("id is not valid")
        }

        return {id, ...Pupils.pupilsDb.get(id)};
    }

    public update(id: string, updateProfile: Person): string{
        if(!Pupils.pupilsDb.has(id)){
            throw new Error("id is not valid")
        }
        Pupils.pupilsDb.set(id, updateProfile);
        return id;
    }

    public remove(id: string): boolean{
        if(!Pupils.pupilsDb.has(id)) throw new Error ("invalid id");
        return Pupils.pupilsDb.delete(id);
    }


}