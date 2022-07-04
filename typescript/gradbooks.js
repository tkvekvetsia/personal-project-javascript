"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gradebooks = void 0;
class Gradebooks {
    constructor(groups, teachers, lms) {
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }
    add(groupId) {
        let id = String(Gradebooks.counter++);
        let groupObj = this.groups.read(groupId);
        delete groupObj.id;
        Gradebooks.gradebooksDb.set(id, Object.assign({}, groupObj));
        return id;
    }
    clear() {
        Gradebooks.gradebooksDb.clear();
    }
}
exports.Gradebooks = Gradebooks;
Gradebooks.counter = 1;
Gradebooks.gradebooksDb = new Map();
