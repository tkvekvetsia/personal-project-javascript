import { Subject } from "./lms";

const history = new Subject({
    title: 'history',
    lessons: 24,
    // description : "string"

})
console.log(history.id)