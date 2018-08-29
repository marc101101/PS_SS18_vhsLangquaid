import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environement';
import { UserData } from '../model/UserData';
import { AlertService } from '../sharedModule/alert.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authStatus: boolean = false;
  private url: string = "/v1";

  constructor(public http: HttpClient, public alertService: AlertService) { }

  isLoggedIn(): boolean{   
    return this.authStatus;
  }

  login(user:UserData): Observable<any>{
    return this.http.post(this.url+"/auth", {email: user.mail, password: user.password}).pipe(
      map((res: Response) => {
        this.authStatus = true;
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        this.alertService.push(err);
        return Observable.of(err);
      })
    )
  }

  logout(): void{

  }

  register(): void{

  }

}
