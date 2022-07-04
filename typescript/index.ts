import { Subject, LMS } from "./lms";

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