"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Subject_id;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LMS = exports.Subject = void 0;
class Subject {
    constructor(subj) {
        _Subject_id.set(this, String(Subject.counter));
        this.title = subj.title;
        this.lessons = subj.lessons;
        if (subj.description) {
            this.description = subj.description;
        }
        Subject.counter++;
    }
    get id() {
        return __classPrivateFieldGet(this, _Subject_id, "f");
    }
}
exports.Subject = Subject;
_Subject_id = new WeakMap();
Subject.counter = 1;
class LMS {
    add(subj) {
        let obj = {
            title: subj.title,
            lessons: subj.lessons,
            id: subj.id,
            // #id: subj.id
        };
        if (subj.description) {
            obj.description = subj.description;
        }
        LMS.subjects.set(subj.id, obj);
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
