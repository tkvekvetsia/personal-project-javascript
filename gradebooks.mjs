import { vaidateRecord, isGroupsInstance, isLmsInstance, isTeachersInstance } from "./validator.mjs";


export class Gradebooks{
    static counter = 1;
    static gradebooksDb = new Map();
  

    constructor(groups, teachers, lms){
        isGroupsInstance(groups);
        isTeachersInstance(teachers);
        isLmsInstance(lms);
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    add(groupId){
        if(typeof groupId !== 'string'){
            throw new Error('groupid is not a string');
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
        //pupilId validation
        let condition = true;
        for (let i = 0; i < pupilsArr.length; i++){
            if(pupilsArr[i].id === recordData.pupilId){
                condition = false
            }
        }
        if(condition)throw new Error("pupilId is not valid")


        for (let i = 0; i < pupilsArr.length; i++){
            if(pupilsArr[i].id === recordData.pupilId){
                pupilId = recordData.pupilId;
                pupilFullName = `${pupilsArr[i].name.first} ${pupilsArr[i].name.last}` 

            }
        }
        
        

        //get teacher,
              //validation
        if(!this.teachers.read(recordData.teacherId))  {
            throw new Error("teacher id is not valid")
        }

        let teacherObj = this.teachers.read(recordData.teacherId)
        let teacherFullName = `${teacherObj.name.first} ${teacherObj.name.last}`
        recordObj.teacher = teacherFullName;

         //get subject
         const subjArr = this.lms.readAll();
        //subjectId validation
        let isNotTeacherid = true;
        for(let i = 0; i < subjArr.length; i++){
            if(subjArr[i].id === recordData.subjectId){
                isNotTeacherid = false
                
           }
        }
        if(isNotTeacherid) throw new Error('subjectid is not valid')

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

    read(gradebookId, pupilId){
        if(typeof gradebookId !== 'string'){
            throw new Error("gradebookId is required and it must be String")
        }
        if(!Gradebooks.gradebooksDb.get(gradebookId)[pupilId]){
            throw new Error("gradbookid is not valid")
        }

        if(typeof pupilId !== 'string'){
            throw new Error("pupilId is required and it must be a string")
        }

        return Gradebooks.gradebooksDb.get(gradebookId)[pupilId];
    }

    readAll(gradebookId){
        if(typeof gradebookId !== "string"){
            throw new Error("grade book id is required and it must be a string")
        }

        if(!Gradebooks.gradebooksDb.has(gradebookId)){
            throw new Error('gradbookid is not valid');
        }

        const arr = []
        for (let key in Gradebooks.gradebooksDb.get(gradebookId)){
            if(key !== 'room' && key !=='pupils'){
                arr.push(this.read(gradebookId, key))
            }
        }
        return arr;
    }
  
}