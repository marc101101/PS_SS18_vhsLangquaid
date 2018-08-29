import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../../../services/alert.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private url: string = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('token')
    })
  };

  constructor(public http: HttpClient, public alertService: AlertService) { }

  
  getAllCategories(): Observable<any>{
    let retVal = [{
        rub_name: "Allgemeines",
        rub_titel: "Allgemeines",
        rub_text: "Sammelplatz für allgemeine Kurse und Veranstaltungen",
        eingegeben_von_user: 0,
        eingegeben_am_datum: "2018-01-01",
        eingegeben_am_zeit: "00:00:00"
      },
      {
        rub_name: "Kunst und Musik",
        rub_titel: "Kunst und Musik",
        rub_text: "Sammelplatz für Kunst und Musik",
        eingegeben_von_user: 0,
        eingegeben_am_datum: "2018-01-01",
        eingegeben_am_zeit: "00:00:00"
      },
      {
        rub_name: "Technik",
        rub_titel: "Technik",
        rub_text: "Sammelplatz für technische Kurse",
        eingegeben_von_user: 0,
        eingegeben_am_datum: "2018-01-01",
        eingegeben_am_zeit: "00:00:00"
      },
      {
        rub_name: "Sport",
        rub_titel: "Sport",
        rub_text: "Sammelplatz für sportliche Kurse",
        eingegeben_von_user: 0,
        eingegeben_am_datum: "2018-01-01",
        eingegeben_am_zeit: "00:00:00"
      }
    ];
    return Observable.of(retVal);
    /*return this.http.get(this.url + "/categories", this.httpOptions).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return Observable.of(err);
      })
    )*/
  } 

}
