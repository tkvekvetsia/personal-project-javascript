"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gradebooks = void 0;
const groups_1 = require("./groups");
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
    addRecord(gradebookId, recordData) {
        if (!groups_1.Groups.groups.has(gradebookId))
            throw new Error("invalid id");
        //get name and id
        const pupilsArr = Gradebooks.gradebooksDb.get(gradebookId).pupils;
        const pupilData = pupilsArr.find((pupil) => pupil.id === recordData.pupilId);
        const pupilId = pupilData.id;
        let pupilFullName = `${pupilData.name.first} ${pupilData.name.last}`;
        //get teacher,
        let teacherObj = this.teachers.read(recordData.teacherId);
        let teacherFullName = `${teacherObj.name.first} ${teacherObj.name.last}`;
        //  get subject
        const subjArr = this.lms.readAll();
        const subj = subjArr.find((subj) => subj.id === recordData.subjectId);
        const subjTitle = subj.title;
        let recordObj = {
            name: teacherFullName,
            subject: subjTitle,
            lesson: recordData.lesson,
            mark: recordData.mark
        };
        if (!Gradebooks.gradebooksDb.get(gradebookId)[pupilId]) {
            let records = [];
            records.push(recordObj);
            Gradebooks.gradebooksDb.get(gradebookId)[pupilId] = {
                name: pupilFullName,
                records: records
            };
        }
        else {
            Gradebooks.gradebooksDb.get(gradebookId)[pupilId].records.push(recordObj);
        }
    }
    read(gradebookId, pupilId) {
        if (!Gradebooks.gradebooksDb.has(gradebookId))
            throw new Error("invalid gradbookId");
        return Gradebooks.gradebooksDb.get(gradebookId)[pupilId];
    }
    readAll(gradebookId) {
        if (!Gradebooks.gradebooksDb.has(gradebookId))
            throw new Error("invalid gradbookId");
        const arr = [];
        for (let key in Gradebooks.gradebooksDb.get(gradebookId)) {
            if (key !== 'room' && key !== 'pupils') {
                arr.push(this.read(gradebookId, key));
            }
        }
        return arr;
    }
}
exports.Gradebooks = Gradebooks;
Gradebooks.counter = 1;
Gradebooks.gradebooksDb = new Map();
