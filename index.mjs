import { Subject, LMS } from "./lms.mjs";
import { Teachers } from "./teachers.mjs";
import { Pupils } from "./pupils.mjs";
import { Groups } from "./groups.mjs";
import { Gradebooks } from "./gradebooks.mjs";

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
    lessons: 24,
   description: '2'
})

// console.log(history)


// console.log(history.id)



const lms = new LMS();
lms.add(history);
// console.log(history.id)
lms.add(geography);
lms.verify(history)
// console.log(lms.verify(history));
// console.log(lms.readAll())
// console.log(lms.readAll())
// console.log(lms.verify(history))
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
    //   {
    //     subject: 'geography' // just name property of subject.
    //   }, 
    ],
    description: "true",
}

const teachers = new Teachers();
const teacherId = teachers.add(teacherData);
// console.log(Teachers.teachers)
// console.log(teachers.read(teacherId));
const  updatedProfile ={
    name: {
        first: "helena",
        last: "boe",
      },
  
      dateOfBirth: "11.02.1995", // format date
  
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
const  teacherId1 = teachers.update(teacherId, updatedProfile);
// teachers.remove(teacherId);
// console.log(teacherId)
// console.log(teachers.read(teacherId));
// const teacherId = teachers.add(data);









//pupil
let pupilData = {
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
    // description: "string"
  }

  let pupilData2 = {
    name: {
      first: "john",
      last: "doe"
    },
    dateOfBirth: "12.05.2015", // format date
    phones: [
      {
        phone: "22",
        primary: true
      }
    ],
    sex: "male", // male OR female
    // description: "string"
  }
  // all fields are required, except description
  
  // Create new Pupil from Pupil's data
  const pupils = new Pupils();
  
  // Create a new pupil
  const pupil = pupils.add(pupilData);
  const pupil2 = pupils.add(pupilData2);

  // console.log(pupil)
  
  // console.log(pupil.id) // should return pupil 

  pupils.read(pupil.id)
  // console.log(pupils.read(pupil2.id))
//   will return Pupils data including pupil's id
//   console.log(pupils.read(pupil.id))
  let pupilUpdate = {
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
  // will update Pupil. This method should use the same validation as a add method
//   console.log(pupils.update(pupil.id, pupilUpdate))
//   console.log(pupils.read(pupil.id))


const room = 236;
const groups = new Groups();
const groupId = groups.add(room);
// console.log(groupId)
// console.log(pupil.id)
groups.addPupil(groupId, pupil);
groups.addPupil(groupId, pupil2);

// console.log(Groups.groups)
// groups.removePupil(groupId, pupil.id);
// console.log(pupil.id)
// console.log( Groups.groups.get(groupId).room)
// console.log(Groups.groups)
groups.update(groupId, {
  room: 237
})
// console.log( Groups.groups.get(groupId).room)
// console.log(groups.read(groupId))
// console.log(groups.readAll());



//gradebooks



const pupilID = pupil.id;
const teacherID = teacherId;
const gradebooks = new Gradebooks(groups, teachers, lms);

const gradebook = gradebooks.add(groupId);

// console.log(Groups.groups)
// console.log(Teachers.teachers)
// console.log(LMS.subjects)
// console.log(Pupils.pupilsDb)
// console.log(Gradebooks.gradebooksDb);
// gradebooks.clear();
// console.log(Gradebooks.gradebooksDb);

// console.log(pupil.id)
const record = {
  pupilId: pupilID,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};
const record1 = {
  pupilId: pupil2.id,
  teacherId: teacherId,
  subjectId: '3',
  lesson: 1,
  mark: 9
};




// Gradebooks.gradebooksDb
// console.log(Gradebooks.gradebooksDb.get(gradebook)[pupilID]);

// console.log(Gradebooks.gradebooksDb.get(gradebook));
gradebooks.addRecord(gradebook, record);
gradebooks.addRecord(gradebook, record1);


// gradebooks.addRecord(gradebook, record);
// gradebooks.addRecord(gradebook, record);
// console.log(Gradebooks.gradebooksDb.get(gradebook)[pupilID]);
// console.log(Gradebooks.gradebooksDb.get(gradebook));
// console.log(gradebooks.read(gradebook, pupilID))
// console.log(gradebooks.readAll(gradebook))
console.log(gradebooks.readAll(gradebook))
// console.log(teachers.read(teacherId));


// console.log(LMS.subjects)