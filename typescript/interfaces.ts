export interface Subj{
    title: string;
    lessons: number;
    description?: string
}

export interface Lap{
    id: string;
    title: string;
    lessons: number;
    description?: string;
    
}

interface Phones{
    phone: string, primary: boolean
}
interface Emails{
    email: string, primary: boolean
}

interface Sub{
    subject: string
}

// type sex = 'male' | "female"




export interface Person{
    name: {
      first: string,
      last: string
    },
    dateOfBirth: string , // format date
    phones: Phones[]
    sex: string, // male or female
    description?: string,
}

export interface Teacher extends Person{
   emails: Emails[];
   subjects: Sub[]
}



export function isDate(date: string):boolean{
    return /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(date)
}

export interface Record{
    pupilId: string;
    teacherId: string;
    subjectId: string;
    lesson: number;
    mark: number
}

export interface Id{
    id: string;
}



export interface GroupInterface{
    room: number;
    pupils: Person & {id: string}[] 
    
}