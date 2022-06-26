import { LMS } from "./lms.mjs"


function validateObj(obj){
    let result = false;
    if(typeof obj == 'object'&& !Array.isArray(obj) && obj !== null){
        result = true;
    }
    return result;
    
}


//lms validations
export function validateSubject(subj){
    if(typeof subj !== 'object'|| Array.isArray(subj) || subj === null){
        throw new TypeError ("Parameter is not an object");
    }
    
    //key validation
    if(!subj.title){
        throw new Error("title is required");
    }
    if(!subj.lessons){
        throw new Error("lessons is required");
    }

    for (let key in subj){
        if(key !== 'title' && key !== 'lessons' && key !== 'description'){
            throw new Error("Key is not valid");
        }
    }

    // type of key validation
    if(typeof subj.title !== 'string'){
        throw new Error("title is not a string");
    }

    if(typeof subj.lessons !== "number"){
        throw new Error("lessons  is not a number");
    }

    if(subj.description && typeof subj.description !== 'string'){
        throw new Error('description is not a string');
    } 
}





export function objEqual(obj1, obj2) {
    const keys1 = Object.getOwnPropertyNames(obj1);
    const keys2 = Object.getOwnPropertyNames(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
}


//teachers validations
function isDate(date){
    return /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(date)
}

function isArrayOfObj(arr){
    let result = true;
    for (let i =0; i < arr.length; i++){
        if(!validateObj(arr[i]))
        result = false
    }
    return result;
}






export function validatePerson(data){
    if(typeof data !== 'object'|| Array.isArray(data) || data === null){
        throw new TypeError ("Parameter is not an object");
    }


    //data key validation
    if(typeof data.name !== 'object'|| Array.isArray(data.name) || data.name === null) {
        throw new Error('name is required and it must be an object');
    };

    if(typeof data.dateOfBirth !== 'string' || !isDate(data.dateOfBirth)){
        throw new Error("dateOfBirth is required and it must be string in date format");
    };

    if(!Array.isArray(data.phones)|| !isArrayOfObj(data.phones)){
        throw new Error ("Phones is required and it must be an array of objects");
    };

    if(data.sex !== "male" && data.sex !== "female"){
        throw new Error('sex is required and it must be a string');
    };
    
    //name key validation
    //name key validation
    if(typeof data.name.first !== 'string'){
        throw new Error("first is required and it must be string");
    };

    if(typeof data.name.last !== 'string'){
        throw new Error("last is required and it mus be string");
    }; 

    if(Object.getOwnPropertyNames(data.name).length !== 2){
        throw new Error("kes is not valid");
    };

    //phones validations
    let primaryPhone = 0;
    data.phones.forEach(element => {
        if(typeof element.phone !== 'string'){
            throw new Error("phone is required and it must be a string");
        }
        if(typeof element.primary !== 'boolean'){
            throw new Error("primary is required and it must be a boolean");
        }
        if(Object.getOwnPropertyNames(element).length > 2){
            throw new Error ("key is not valid");
        }
        if(element.primary === true){
            primaryPhone++;
        }

    });

  
    
    if(primaryPhone !== 1){
        throw new Error("there must be 1 primary phone");
    }
}



export function validateTeacher(data){

    //data key validation
   
       if(!Array.isArray(data.emails) || !isArrayOfObj(data.emails)){
           throw new Error('emails is required and it must be an array of objects');
       };
   
       if(!Array.isArray(data.subjects) || !isArrayOfObj(data.subjects)){
           throw new Error ("subjects is required and it must be an array of objects");
       };
   
       let keys = Object.getOwnPropertyNames(data).length; 
       if((keys > 6 && !data.description) || keys > 7) throw new Error("key is not valid");
   
   
       //emails  validations
       let primaryMail = 0;
   
       data.emails.forEach(element => {
           if(typeof element.email !== 'string'){
               throw new Error("email is required and it must be a string");
           }
           if(typeof element.primary !== 'boolean'){
               throw new Error("primary is required and it must be a boolean");
           }
           if(Object.getOwnPropertyNames(element).length > 2){
               throw new Error ("key is not valid");
           }
   
           if(element.primary === true){
               primaryMail++;
           }
       });
   
       if(primaryMail !== 1){
           throw new Error("there must be 1 primary email");
       }
   
       //subjects validation
       data.subjects.forEach(element =>{
           if(typeof element.subject !== "string"){
               throw new Error("subject is required and it must be a string");
           }
           if(Object.getOwnPropertyNames(element).length !== 1){
               throw new Error("Key is not valid");
           }
   
           let condition = false;
           LMS.subjects.forEach(value => {
               if(element.subject == value.title ){
                   condition =true;
               }
           })
   
           if(!condition){
               throw Error("subject is not in database")
           }
       })
   
   }
   



export function validatePupil(data){
    let keys = Object.getOwnPropertyNames(data).length; 
    if((keys > 4 && !data.description) || keys > 5) throw new Error("key is not valid");

}


