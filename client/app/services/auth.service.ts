import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environement';
import { UserData } from '../model/UserData';
import { AlertSerivce } from './services/alert.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authStatus: boolean = false;
  private url: string = environment.apiUrl;

  constructor(public http: HttpClient, public alertService: AlertService) { }

  isLoggedIn(): boolean{
    return this.authStatus;
  }

  login(user:UserData): Observable<any>{
    return this.http.post(this.url + "/auth", {email: user.email, password: user.password}).pipe(
      map((res: Response) => res.json()),
      catchError((err: HttpErrorResponse) => {
        return this.alertService.push(err);
      })
    )
  }

  logout(): void{

  }

  register(): void{

  }
}
