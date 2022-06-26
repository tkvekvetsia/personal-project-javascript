import { Subject, LMS } from "./lms.mjs";
import { Teachers } from "./teachers.mjs";


//lms

const history = new Subject({
    title: 'history',
    lessons: 24,
    // description : "string"
})

const geography = new Subject({
    title: 'geography',
    lessons: 24
})
const biology = new Subject({
    title: 'geography',
    lessons: 24
})

console.log(history)


console.log(history.id)


const lms = new LMS();
lms.add(history);
lms.add(geography);
console.log(lms.verify(history));
// console.log(lms.readAll())
// console.log(lms.readAll())
// console.log(lms.verify(history))
lms.verify(history)
// lms.remove(history)
// console.log(lms.readAll())


//teachers

// let teacherData = {
//     name: {
//       first: "john",
//       last: "doe",
//     },

//     dateOfBirth: "12.05.1999", // format date

//     emails: [
//       {
//         email: "string",
//         primary: true
//       },
//       {
//         email: "string",
//         primary: false,
//       },
      
//     ],

//     phones: [
//       {
//         phone: "555555",
//         primary: true
//       },

//       {
//         phone: "11111",
//         primary: false
//       },

//     ],
//     sex: "male", // male or female
//     subjects: [
//       {
//         subject: "history" // just name property of subject.
//       }, 
//     //   {
//     //     subject: 'geography' // just name property of subject.
//     //   }, 
//     ],
//     description: "true",
// }

// const teachers = new Teachers();
// const teacherId = teachers.add(teacherData);
// // console.log(Teachers.teachers)
// // console.log(teachers.read(teacherId));
// const  updatedProfile ={
//     name: {
//         first: "helena",
//         last: "boe",
//       },
  
//       dateOfBirth: "11.02.1995", // format date
  
//       emails: [
//         {
//           email: "string-1",
//           primary: true
//         },
//         {
//           email: "string--2",
//           primary: false,
//         },
        
//       ],
  
//       phones: [
//         {
//           phone: "6666",
//           primary: true
//         },
  
//         {
//           phone: "2222",
//           primary: false
//         },
  
//       ],
//       sex: "female", // male or female
//       subjects: [
//         {
//           subject: "history" // just name property of subject.
//         }, 
        
        
//       ],
//       description: "string"
// }
// const  teacherId1 = teachers.update(teacherId, updatedProfile);
// teachers.remove(teacherId);
// console.log(teacherId)
// console.log(teachers.read(teacherId));
// // const teacherId = teachers.add(data);



