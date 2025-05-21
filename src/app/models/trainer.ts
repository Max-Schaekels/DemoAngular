export interface Trainer {
    id : number;
    firstName : string;
    lastName : string;
    avatar : string;
    birthDate? : Date;
    status : WorkingStatus;
}


export enum WorkingStatus {
    Vacances,
    Disponible,
    Indisponible
}