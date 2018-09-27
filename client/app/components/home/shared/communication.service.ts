import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { log } from 'util';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class CommunicationService{

    public instruction_sub_comb = new Subject<any>();
    public course_sub_comb = new Subject<any>();
    public search_sub_comb = new Subject<any>();
    private color: string;
    private category: string;

    constructor() {
    }

    sendMessage(message: boolean) {        
        this.instruction_sub_comb.next(message);
    }

    sendCourseViewMessage(message: boolean) {        
        this.course_sub_comb.next(message);
    }

    searchViewMessage(message: boolean) {        
        this.search_sub_comb.next(message);
    }

    setInfo(color: string, category: string) {
        this.color = color;
        this.category = category;
    }

    getInfo(): Observable<any>{
        return of(
            {
                'color': this.color,
                'category': this.category
            });
    }

}     