import { teacher, person } from "./interfaces";
import { Subject, LMS } from "./lms";
import { Teachers } from "./teachers";
import { Pupils } from "./pupils";



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


//pupil
let pupilData: person = {
  name: {
    first: "jimy",
    last: "foo"
  },
  dateOfBirth: "12.05.2015", // format date
  phones: [
    {
      phone: "555",
      primary: true
    }
  ],
  sex: "male", // male OR female
  description: "string"
}


// Create new Pupil from Pupil's data
const pupils = new Pupils();

// // Create a new pupil
const pupil = pupils.add(pupilData);
// console.log(pupil)
// const pupil2 = pupils.add(pupilData2);

// console.log(pupil.id) // should return pupil 

// console.log(pupils.read(pupil.id))

let pupilUpdate: person = {
  name: {
    first: "anna",
    last: "goo"
  },
  dateOfBirth: "12.05.2015", // format date
  phones: [
    {
      phone: "333",
      primary: true
    }
  ],
  sex: "female", // male OR female
  description: "string"
}

pupils.update(pupil.id, pupilUpdate);
// console.log(pupils.read(pupil.id));
// pupils.remove(pupil.id)
