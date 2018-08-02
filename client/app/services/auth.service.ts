import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStatus: boolean = false;

  constructor() { }

  isLoggedIn(): boolean{
    return this.authStatus;
  }

  login(): void{

  }

  logout(): void{

  }

  register(): void{
    
  }
}
