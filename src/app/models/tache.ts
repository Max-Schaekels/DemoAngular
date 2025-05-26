export interface Tache{
    id : number;
    name : string;
    description? : string;
    status : string;
    urgence : string;
    userFirstName : string; 
    startDate : Date;
    endDate? : Date;
}