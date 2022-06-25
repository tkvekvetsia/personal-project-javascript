import { validateSubject } from "./validator.mjs";
export class Subject{
    #counter = 1;
    constructor(subj){
        validateSubject(subj);
        this.id = String(this.#counter++);
        Object.assign(this, subj)
    }
}