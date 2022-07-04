import { person } from "./interfaces";

export class Pupils{
    static counter = 1;
    static pupilsDb = new Map();

    public  add(pupilData: person){
        let id: string = String(Pupils.counter++);
        Pupils.pupilsDb.set(id, pupilData)
        return {id, ...pupilData}
    }

    public read(id: string){
        if(!Pupils.pupilsDb.has(id)){
            throw new Error("id is not valid")
        }

        return {id, ...Pupils.pupilsDb.get(id)};
    }

    public update(id: string, updateProfile: person){
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