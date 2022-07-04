"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMS = exports.Subject = void 0;
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
class LMS {
    add(subj) {
        LMS.subjects.set(subj.id, Object.assign({ id: subj.id }, subj));
        return subj.id;
    }
    remove(subj) {
        LMS.subjects.delete(subj.id);
    }
    verify(subj) {
        return LMS.subjects.has(subj.id);
    }
    readAll() {
        return [...LMS.subjects.values()];
    }
}
exports.LMS = LMS;
LMS.counter = 1;
LMS.subjects = new Map();
