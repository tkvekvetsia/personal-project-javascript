"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teachers = void 0;
const interfaces_1 = require("./interfaces");
class Teachers {
    add(data) {
        if (!(0, interfaces_1.isDate)(data.dateOfBirth)) {
            throw new Error("date of birth must be in format mm/dd/yyyy");
        }
        let id = String(Teachers.counter++);
        Teachers.teachers.set(id, data);
        return id;
    }
    read(id) {
        if (!Teachers.teachers.has(id)) {
            return null;
        }
        else {
            return Object.assign({ id }, Teachers.teachers.get(id));
        }
    }
    update(id, updateProfile) {
        Teachers.teachers.set(id, updateProfile);
        return id;
    }
    remove(id) {
        if (!Teachers.teachers.has(id))
            throw new Error("invalid id");
        return Teachers.teachers.delete(id);
    }
}
exports.Teachers = Teachers;
Teachers.counter = 1;
Teachers.teachers = new Map();
