export class User{
    id? : number
    email : string;
    password : string;
    avatar : string;
    name : string;
    matchs : number;


    constructor(){
        this.matchs = 0;
        this.avatar = ''
    }


}

