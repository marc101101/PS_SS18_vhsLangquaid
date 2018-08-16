import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environement';
import { UserData } from '../model/UserData';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authStatus: boolean = false;
  private url: string = environment.apiUrl;

  constructor(public http: HttpClient) { }

  isLoggedIn(): boolean{
    return this.authStatus;
  }

  login(user:UserData): Observable<any>{
    return this.http.post(this.url + "/auth", {email: user.email, password: user.password});
  }

  logout(): void{

  }

  register(): void{

  }
}
