export class Message {

    content: string;
    timstamp: Date;

    constructor(content: string, timestamp: Date){
        this.content = content;
        this.timstamp = timestamp;
    }
}
