import { Person, GroupInterface, Id } from "./interfaces";

export class Groups{
    static counter = 1;
    static groups = new Map();

    public add(room: number): string{
        let id: string = String(Groups.counter++);
        Groups.groups.set(id, {room: room, pupils: []});
        return id;
    }

    public addPupil(groupId: string, pupil: Person & Id):void{
        if(!Groups.groups.has(groupId)) throw new Error("invalid id");
        Groups.groups.get(groupId).pupils.push(pupil);
    }

    public removePupil(groupId: string, pupilId: string): void{
        if(!Groups.groups.has(groupId)){
            throw new Error("invalid group id")
        }
        let arrOfPupils = Groups.groups.get(groupId).pupils;
        if(arrOfPupils.findIndex((pupil : Person & Id) => pupil.id === pupilId) < 0){
            throw new Error("invalid pupilId")
        }
    
        for (let i = 0; i < arrOfPupils.length; i++){
            if(arrOfPupils[i].id === pupilId){
                arrOfPupils.splice(i, 1);
            }
        }
    }

    public update(groupId: string, updateInfo: {room : number}): void{
      if(!Groups.groups.get(groupId)) throw new Error("invalid groupid")

        Groups.groups.get(groupId).room = updateInfo.room
    }

    public read(groupId: string): Id & GroupInterface{
      if(!Groups.groups.get(groupId)) throw new Error("invalid groupid")
        
        return {id: groupId, ...Groups.groups.get(groupId)}
    }

    public readAll():GroupInterface []{
        return [...Groups.groups.values()];
    }


}