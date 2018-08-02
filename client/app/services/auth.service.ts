import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatus: boolean = false;
  private url: string;

  constructor(public http: HttpClient) { }

  isLoggedIn(): boolean{
    return this.authStatus;
  }

  login(email: string, password: string): Observable<any>{
    return this.http.post(this.url + "/auth", {email: email, password: password});
  }

  logout(): void{

  }

  register(): void{

  }
}
