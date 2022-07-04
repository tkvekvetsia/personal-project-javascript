import { LMS } from "./lms";
import { Groups } from "./groups";
import { Teachers } from "./teachers";
import { record } from "./interfaces";

export class Gradebooks{
    static counter = 1;
    static gradebooksDb = new Map();
    private teachers: Teachers;
    private groups: Groups;
    private lms: LMS

    constructor(groups: Groups, teachers: Teachers, lms: LMS){
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms
    }

    public add(groupId: string): string{
        let id: string = String(Gradebooks.counter++)
        let groupObj = this.groups.read(groupId);
        delete groupObj.id;
        Gradebooks.gradebooksDb.set(id, {...groupObj});
        return id;
    }

    public clear(): void{
        Gradebooks.gradebooksDb.clear();
    }

}