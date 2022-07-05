import { LMS } from "./lms";
import { Groups } from "./groups";
import { Teachers } from "./teachers";
import { Record, Person, Subj} from "./interfaces";
import { Pupils } from "./pupils";


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


    public addRecord(gradebookId: string, recordData :Record){
        if(!Groups.groups.has(gradebookId)) throw new Error("invalid id")

        
     //get name and id
    const pupilsArr = Gradebooks.gradebooksDb.get(gradebookId).pupils;
    
        
    const pupilData: Person & {id: string} = pupilsArr.find((pupil: Person & {id: string}) => pupil.id === recordData.pupilId);
    const pupilId: string = pupilData.id;
    let pupilFullName: string = `${pupilData.name.first} ${pupilData.name.last}`
  
    //get teacher,
        let teacherObj = this.teachers.read(recordData.teacherId)
        let teacherFullName = `${teacherObj.name.first} ${teacherObj.name.last}`

    //  get subject
        const subjArr = this.lms.readAll();
        const subj: Subj &{id: string} = subjArr.find((subj: Subj & {id: string})=> subj.id === recordData.subjectId)
        const subjTitle: string = subj.title 
 
        let recordObj = {
            name: teacherFullName,
            subject: subjTitle,
            lesson: recordData.lesson,
            mark: recordData.mark

        }
       
       

       if(!Gradebooks.gradebooksDb.get(gradebookId)[pupilId]){
            let records = []
            records.push(recordObj)
            Gradebooks.gradebooksDb.get(gradebookId)[pupilId] = {
                name : pupilFullName,
                records: records
            } 
            
        }else{
            Gradebooks.gradebooksDb.get(gradebookId)[pupilId].records.push(recordObj);
        }

    }
    
    public read(gradebookId: string, pupilId: string){
        if(!Gradebooks.gradebooksDb.has(gradebookId)) throw new Error("invalid gradbookId")
        return Gradebooks.gradebooksDb.get(gradebookId)[pupilId];
        
    }

    public readAll(gradebookId: string){
        if(!Gradebooks.gradebooksDb.has(gradebookId)) throw new Error("invalid gradbookId")
        const arr = []
        for (let key in Gradebooks.gradebooksDb.get(gradebookId)){
            if(key !== 'room' && key !=='pupils'){
                arr.push(this.read(gradebookId, key))
            }
        }
        return arr;   
    }
}