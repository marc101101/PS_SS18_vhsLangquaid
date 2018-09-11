import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environement';
import { UserData } from '../models/UserData';
import { AlertService } from './alert.service';
import { map, catchError } from 'rxjs/operators';
import { log } from 'util';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authStatus: boolean = false;
  private url: string = environment.apiUrl;
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(public http: HttpClient, public alertService: AlertService, public router: Router) { }

  isLoggedIn(): Observable<boolean>{   
    if(this.jwtHelper.isTokenExpired(localStorage.getItem('token'))){
      this.navToLogin();
    }
    else{
      this.authStatus = true;
    }

    if(!this.authStatus){
      this.navToLogin();
    }
    
    return Observable.of(this.authStatus);
  }

  navToLogin():void{
    this.authStatus = false;
    this.router.navigate(['/login']).catch(error => {
      console.log(error);       
    });    
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
    localStorage.removeItem('token');
    this.authStatus = false;
  }

  register(): void{

  }

}
