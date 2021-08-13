// may be class or interface is use to map json data. 
// export interface Fake {
//     userId:number;
//     id:number;
//     title:string;
//     completed:boolean;
// }

export class Fake {
    constructor(public userId:number,
        public id:number,
        public title:string,
        public completed:boolean ){}
}