"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lms_1 = require("./lms");
const history = new lms_1.Subject({
    title: 'history',
    lessons: 24,
    // description : "string"
});
console.log(history.id);
