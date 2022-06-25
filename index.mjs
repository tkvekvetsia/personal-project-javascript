import { Subject, LMS } from "./lms.mjs";

const history = new Subject({
    title: 'History',
    lessons: 24,
    // description : "string"
})

// console.log(history)
// console.log(history.id)

const lms = new LMS();
lms.add(history);

// console.log(LMS.subjects)

