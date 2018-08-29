import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertingService } from './alerting.service';

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

  constructor(public http: HttpClient, public alertService: AlertingService) { }

  
  getAllCategories(): Observable<any>{
    return this.http.get(this.url + "/categories", this.httpOptions).pipe(
      map((res: Response) => {
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        //this.alertService.push(err);
        return Observable.of(err);
      })
    )
  } 

}