import { Subject } from "./lms.mjs";
import { validatePupil, validatePerson } from "./validator.mjs";

export class Pupils{
    static counter = 1;
    #pupilid = String(Pupils.counter);
    static pupilsDb = new Map();

    add(pupilData){
        validatePerson(pupilData);
        validatePupil(pupilData);
        let id = this.#pupilid;
        Subject.counter++;
        Pupils.pupilsDb.set(id, pupilData);
    }

    
}