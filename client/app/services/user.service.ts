import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environement';
import { AlertService } from '../sharedModule/alert.service';
import { map, catchError } from 'rxjs/operators';
import { User } from '../model/User';
import { log } from 'util';
import { RegisterUser } from '../model/RegisterUser';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url: string = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('token')
    })
  };

  constructor(public http: HttpClient, public alertService: AlertService) { }

  getUserMe(): Observable<any>{
    return this.http.get(this.url + "/user/me", this.httpOptions).pipe(
      map((res: Response) => {
        return res;
        //return Object.assign(User, res);
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return Observable.of(err);
      })
    )
  } 

  updateUserMe(user:User): Observable<any>{
    return this.http.put(this.url + "/user/me", user, this.httpOptions).pipe(
      map((res: Response) => {
        return Object.assign(User, res);
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return Observable.of(err);
      })
    )
  }

  registerUser(user:RegisterUser): Observable<any>{
    return this.http.post(this.url + "/user", user, this.httpOptions).pipe(
      map((res: Response) => {
        return Object.assign(User, res);
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return Observable.of(err);
      })
    )
  }

}
