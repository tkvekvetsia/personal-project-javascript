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
      first: "john",
      last: "doe",
    },

    dateOfBirth: "12.05.1999", // format date

    emails: [
      {
        email: "string",
        primary: true
      },
      {
        email: "string",
        primary: false,
      },
      
    ],

    phones: [
      {
        phone: "555555",
        primary: true
      },

      {
        phone: "11111",
        primary: false
      },

    ],
    sex: "male", // male or female
    subjects: [
      {
        subject: "history" // just name property of subject.
      }, 
      {
        subject: 'geography' // just name property of subject.
      }, 
    ],
    // description: "string",
}

const teachers = new Teachers();
const teacherId = teachers.add(teacherData);
// console.log(Teachers.teachers)
console.log(teachers.read('1'));

// const teacherId = teachers.add(data);



