import { validatePerson} from "./validator.mjs";
import { Groups } from "./groups.mjs";
import { vaidateRecord } from "./validator.mjs";
import { Subject } from "./lms.mjs";

export class Gradebooks{
    static counter = 1;
    static gradebooksDb = new Map();
  

    constructor(groups, teachers, lms){
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    add(groupId){
        if(typeof groupId !== 'string'){
            throw new Error('groupid is not a string');
        }
        if(!Groups.groups.get(groupId)){
            throw new Error("group id is not valid");
        }
        let id = String(Gradebooks.counter++)
        let groupObj = this.groups.read(groupId);
        delete groupObj.id;
        Gradebooks.gradebooksDb.set(id, {...groupObj});
        return id;
    }

    clear(){
        Gradebooks.gradebooksDb.clear();
    }

    addRecord(gradebookId, recordData){
        vaidateRecord(gradebookId, recordData);
        let recordObj = {}
        
        //get name and id
        let pupilId = ""
        let pupilFullName = ''
        let pupilsArr = Gradebooks.gradebooksDb.get(gradebookId).pupils;
        let gradbookObj = Gradebooks.gradebooksDb.get(gradebookId);

        for (let i = 0; i < pupilsArr.length; i++){
            if(pupilsArr[i].id === recordData.pupilId){
                pupilId = recordData.pupilId;
                pupilFullName = `${pupilsArr[i].name.first} ${pupilsArr[i].name.last}` 

            }
        }
        
        

        //get teacher,
        let teacherObj = this.teachers.read(recordData.teacherId)  
        let teacherFullName = `${teacherObj.name.first} ${teacherObj.name.last}`
        recordObj.teacher = teacherFullName;

         //get subject
         const subjArr = this.lms.readAll();
         let subject = ''
         for(let i = 0; i < subjArr.length; i++){
             if(subjArr[i].id === recordData.subjectId){
                 subject = subjArr[i].title
                 
             }
         }
         recordObj.subject = subject;
         //leson and mark
        recordObj.lesson = recordData.lesson;
        recordObj.mark = recordData.mark
        

       if(!gradbookObj[pupilId]){
            let records = []
            records.push(recordObj)
            gradbookObj[pupilId] = {
                name : pupilFullName,
                records: records
            } 
            
        }else{
            gradbookObj[pupilId].records.push(recordObj);
        }
      

        


    }

  
}