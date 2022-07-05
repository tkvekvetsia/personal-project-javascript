"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Groups = void 0;
class Groups {
    add(room) {
        let id = String(Groups.counter++);
        Groups.groups.set(id, { room: room, pupils: [] });
        return id;
    }
    addPupil(groupId, pupil) {
        if (!Groups.groups.has(groupId))
            throw new Error("invalid id");
        Groups.groups.get(groupId).pupils.push(pupil);
    }
    removePupil(groupId, pupilId) {
        if (!Groups.groups.has(groupId)) {
            throw new Error("invalid group id");
        }
        let arrOfPupils = Groups.groups.get(groupId).pupils;
        if (arrOfPupils.findIndex((pupil) => pupil.id === pupilId) < 0) {
            throw new Error("invalid pupilId");
        }
        for (let i = 0; i < arrOfPupils.length; i++) {
            if (arrOfPupils[i].id === pupilId) {
                arrOfPupils.splice(i, 1);
            }
        }
    }
    update(groupId, updateInfo) {
        if (!Groups.groups.get(groupId))
            throw new Error("invalid groupid");
        Groups.groups.get(groupId).room = updateInfo.room;
    }
    read(groupId) {
        if (!Groups.groups.get(groupId))
            throw new Error("invalid groupid");
        return Object.assign({ id: groupId }, Groups.groups.get(groupId));
    }
    readAll() {
        return [...Groups.groups.values()];
    }
}
exports.Groups = Groups;
Groups.counter = 1;
Groups.groups = new Map();
