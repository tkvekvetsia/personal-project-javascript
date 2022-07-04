import { Subject, LMS } from "./lms";
import { Teachers } from "./teachers";
import { teacher } from "./interfaces";


const history = new Subject({
    title: 'history',
    lessons: 24,
    // description : "string"
    

})
// console.log(history)


const lms = new LMS();
lms.add(history);
lms.verify(history)
// console.log(lms.verify(history));
// console.log(lms.readAll())
// console.log(lms.verify(history))
// lms.remove(history)
// console.log(lms.readAll())

//teachers
//teachers

const teacherData: teacher = {
    name: {
      first: "john",
      last: "doe"
    },

    dateOfBirth: "12.31.1999", // format date

    emails: [
      {
        email: "string",
        primary: true
      },
      {
        email: "male",
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
    // description: "true",'
    
}

const teachers = new Teachers();
const teacherId = teachers.add(teacherData);
// console.log(teachers.read(teacherId));
teachers.read(teacherId)

const  updatedProfile: teacher={
  name: {
      first: "helena",
      last: "boe"
    },

    dateOfBirth: "12.02.1995", // format date

    emails: [
      {
        email: "string-1",
        primary: true
      },
      {
        email: "string--2",
        primary: false,
      },
      
    ],

    phones: [
      {
        phone: "6666",
        primary: true
      },

      {
        phone: "2222",
        primary: false
      },

    ],
    sex: "female", // male or female
    subjects: [
      {
        subject: "history" // just name property of subject.
      }, 
      
      
    ],
    description: "string"
}
// const  teacherId1 = teachers.update(teacherId, updatedProfile);
// console.log(teachers.read(teacherId))

// console.log(teachers.remove(teacherId))
// console.log(teacherId)