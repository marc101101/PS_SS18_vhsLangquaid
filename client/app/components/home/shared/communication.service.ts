import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { log } from 'util';

@Injectable()
export class CommunicationService{

    public instruction_sub_comb = new Subject<any>();
    public color_subject = new Subject<any>();

    constructor() {
    }

    sendMessage(message: boolean) {        
        this.instruction_sub_comb.next(message);
    }

    setColor(color: string) {
        this.color_subject.next(color)
    }

}     