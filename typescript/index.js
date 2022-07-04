"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lms_1 = require("./lms");
const history = new lms_1.Subject({
    title: 'history',
    lessons: 24,
    // description : "string"
});
// console.log(history)
const lms = new lms_1.LMS();
lms.add(history);
lms.verify(history);
console.log(lms.verify(history));
// console.log(lms.readAll())
// console.log(lms.verify(history))
// lms.remove(history)
// console.log(lms.readAll())
