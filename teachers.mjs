import { validateTeacher } from "./validator.mjs";

export class Teachers{
    add(data){
        validateTeacher(data);
    }
}