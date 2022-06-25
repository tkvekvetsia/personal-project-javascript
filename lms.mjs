import { validateSubject } from "./validator.mjs";
export class Subject{
    #counter = 0;
    #subjects = new Map();
    constructor(subj){
        validateSubject(subj);
        
    }
}