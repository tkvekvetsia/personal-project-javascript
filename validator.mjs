import { LMS } from "./lms.mjs"

export function validateSubject(subj){
    if(typeof subj !== 'object'|| Array.isArray(subj) || subj === null){
        throw new TypeError ("Parameter is not an object")
    }
    
    //key validation
    if(!subj.title){
        throw new Error("title is required")
    }
    if(!subj.lessons){
        throw new Error("lessons is required")
    }

    for (let key in subj){
        if(key !== 'title' && key !== 'lessons' && key !== 'description'){
            throw new Error("Key is not valid")
        }
    }

    // type of key validation
    if(typeof subj.title !== 'string'){
        throw new Error("title is not a string")
    }

    if(typeof subj.lessons !== "number"){
        throw new Error("lessons  is not a number")
    }

    if(subj.description && typeof subj.description !== 'string'){
        throw new Error('description is not a string')
    } 
}


export function lmsSubjValidator(subj){
    if(typeof subj !== 'object'|| Array.isArray(subj) || subj === null){
        throw new TypeError ("Parameter is not an object")
    }

     //key validation
     if(!subj.title){
        throw new Error("title is required")
    }
    if(!subj.lessons){
        throw new Error("lessons is required")
    }

    for (let key in subj){
        if(key !== 'title' && key !== 'lessons' && key !== 'description' && key !== 'id'){
            throw new Error("Key is not valid")
        }
    }
     // type of key validation
     if(typeof subj.title !== 'string'){
        throw new Error("title is not a string")
    }

    if(typeof subj.lessons !== "number"){
        throw new Error("lessons  is not a number")
    }

    if(subj.description && typeof subj.description !== 'string'){
        throw new Error('description is not a string')
    } 

    if(typeof subj.id !== 'string' ){
        throw new TypeError("id is not a string")
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