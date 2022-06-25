import { Subject, LMS } from "./lms.mjs";
import { Teachers } from "./teachers.mjs";


//lms

const history = new Subject({
    title: 'History',
    lessons: 24,
    // description : "string"
})

// console.log(history)
// console.log(history.id)

const lms = new LMS();
lms.add(history);
lms.verify(history);
lms.readAll();
// console.log(lms.readAll())
// console.log(lms.verify(history))
// lms.remove(history)
// console.log(lms.readAll())


//teachers

let teacherData = {
    name: {
      first: "string",
      last: "string"
    },
    dateOfBirth: "12.05.2000", // format date
    emails: [
      {
        email: "string",
        primary: "boolean"
      },
      {}
      
      
    ],
    phones: [
      {
        phone: "string",
        primary: "boolean"
      },
    ],
    sex: "string", // male or female
    subjects: [
      {
        subject: "string" // just name property of subject.
      }, 
    ],
    description: "string",
}
// console.log(isDate(teacherData.dateOfBirth))
const teachers = new Teachers();
const teacherId = teachers.add(teacherData);
// const teacherId = teachers.add(data);



