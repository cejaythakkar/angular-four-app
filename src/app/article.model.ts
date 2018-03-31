/*export class Article{
    title : string;
    link : string;
    votes : number;
    constructor(title : string , link : string , votes? : number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    upVote():boolean{
        this.votes += 1;
    }
    downVote():boolean{
        this.votes -= 1;
    }
}*/
export class Article{
    constructor(public title : string ,public link : string ,public votes? : number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    upVote():boolean{
        this.votes += 1;
        return false;
    }
    downVote():boolean{
        this.votes -= 1;
        return false;
    }
}