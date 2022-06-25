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
lms.verify(history);
lms.readAll();
// console.log(lms.readAll())
// console.log(lms.verify(history))
// lms.remove(history)
// console.log(lms.readAll())





