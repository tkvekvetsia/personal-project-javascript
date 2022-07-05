"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Subject_subjectid;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMS = exports.Subject = void 0;
class Subject {
    constructor(subj) {
        _Subject_subjectid.set(this, String(Subject.counter));
        Object.assign(this, subj);
        Subject.counter++;
    }
    get id() {
        return __classPrivateFieldGet(this, _Subject_subjectid, "f");
    }
}
exports.Subject = Subject;
_Subject_subjectid = new WeakMap();
Subject.counter = 1;
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
