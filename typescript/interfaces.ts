export interface subject{
    title: string;
    lessons: number;
    description?: string
}

interface phones{
    phone: string, primary: boolean
}
interface emails{
    email: string, primary: boolean
}

interface sub{
    subject: string
}

// type sex = 'male' | "female"




export interface person{
    name: {
      first: string,
      last: string
    },
    dateOfBirth: string , // format date
    phones: phones[]
    sex: string, // male or female
    description?: string,
}

export interface teacher extends person{
   emails: emails[];
   subjects: sub[]
}



export function isDate(date: string):boolean{
    return /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(date)
}

export interface record{
    pupilId: string;
    teacherId: string;
    subjectId: string;
    lesson: number;
    mark: number
}



