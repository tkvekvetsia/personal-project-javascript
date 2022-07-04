"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pupils = void 0;
class Pupils {
    add(pupilData) {
        let id = String(Pupils.counter++);
        Pupils.pupilsDb.set(id, pupilData);
        return Object.assign({ id }, pupilData);
    }
    read(id) {
        if (!Pupils.pupilsDb.has(id)) {
            throw new Error("id is not valid");
        }
        return Object.assign({ id }, Pupils.pupilsDb.get(id));
    }
    update(id, updateProfile) {
        if (!Pupils.pupilsDb.has(id)) {
            throw new Error("id is not valid");
        }
        Pupils.pupilsDb.set(id, updateProfile);
        return id;
    }
    remove(id) {
        if (!Pupils.pupilsDb.has(id))
            throw new Error("invalid id");
        return Pupils.pupilsDb.delete(id);
    }
}
exports.Pupils = Pupils;
Pupils.counter = 1;
Pupils.pupilsDb = new Map();
