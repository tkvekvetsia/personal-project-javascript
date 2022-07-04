"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lms_1 = require("./lms");
const teachers_1 = require("./teachers");
const pupils_1 = require("./pupils");
const history = new lms_1.Subject({
    title: 'history',
    lessons: 24,
    // description : "string"
});
// console.log(history)
const lms = new lms_1.LMS();
lms.add(history);
lms.verify(history);
// console.log(lms.verify(history));
// console.log(lms.readAll())
// console.log(lms.verify(history))
// lms.remove(history)
// console.log(lms.readAll())
//teachers
//teachers
const teacherData = {
    name: {
        first: "john",
        last: "doe"
    },
    dateOfBirth: "12.31.1999",
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
    sex: "male",
    subjects: [
        {
            subject: "history" // just name property of subject.
        },
        {
            subject: 'geography' // just name property of subject.
        },
    ],
    // description: "true",'
};
const teachers = new teachers_1.Teachers();
const teacherId = teachers.add(teacherData);
// console.log(teachers.read(teacherId));
teachers.read(teacherId);
const updatedProfile = {
    name: {
        first: "helena",
        last: "boe"
    },
    dateOfBirth: "12.02.1995",
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
    sex: "female",
    subjects: [
        {
            subject: "history" // just name property of subject.
        },
    ],
    description: "string"
};
// const  teacherId1 = teachers.update(teacherId, updatedProfile);
// console.log(teachers.read(teacherId))
// console.log(teachers.remove(teacherId))
// console.log(teacherId)
//pupil
let pupilData = {
    name: {
        first: "jimy",
        last: "foo"
    },
    dateOfBirth: "12.05.2015",
    phones: [
        {
            phone: "555",
            primary: true
        }
    ],
    sex: "male",
    description: "string"
};
// Create new Pupil from Pupil's data
const pupils = new pupils_1.Pupils();
// // Create a new pupil
const pupil = pupils.add(pupilData);
// console.log(pupil)
// const pupil2 = pupils.add(pupilData2);
// console.log(pupil.id) // should return pupil 
// console.log(pupils.read(pupil.id))
let pupilUpdate = {
    name: {
        first: "anna",
        last: "goo"
    },
    dateOfBirth: "12.05.2015",
    phones: [
        {
            phone: "333",
            primary: true
        }
    ],
    sex: "female",
    description: "string"
};
pupils.update(pupil.id, pupilUpdate);
// console.log(pupils.read(pupil.id));
// pupils.remove(pupil.id)
