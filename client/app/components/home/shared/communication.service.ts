import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { log } from 'util';
import { Observable } from 'rxjs';

@Injectable()
export class CommunicationService{

    public instruction_sub_comb = new Subject<any>();
    private color: string;

    constructor() {
    }

    sendMessage(message: boolean) {        
        this.instruction_sub_comb.next(message);
    }

    setColor(color: string) {
        this.color = color;
    }

    getColor(): Observable<string>{
        return Observable.of(this.color);
    }

}     