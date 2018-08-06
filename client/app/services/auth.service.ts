import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environement';


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

  login(email: string, password: string): Observable<any>{
    return this.http.post(this.url + "/auth", {email: email, password: password});
  }

  logout(): void{

  }

  register(): void{

  }
}
