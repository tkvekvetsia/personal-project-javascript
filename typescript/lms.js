"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    constructor(subj) {
        Object.assign(this, subj);
        Subject.counter++;
    }
    get id() {
        return Subject.subjectid;
    }
}
exports.Subject = Subject;
Subject.counter = 1;
Subject.subjectid = String(Subject.counter);
