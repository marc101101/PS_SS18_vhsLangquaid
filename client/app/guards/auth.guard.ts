import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { isUndefined, log } from 'util';

@Injectable()
export class AuthGuard {

  private user: string;
  private exp: string;
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor( private authService : AuthService, private router : Router ) {
    this.parseUserDetailsFromToken();
  }

  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    if(!sessionStorage.getItem('user')) {
      this.parseUserDetailsFromToken();
    }
    
    if(!isUndefined(this.user)){
      return true;
    }

    else{
      this.router.navigate(['/login']).catch(error => {
        console.log(error);        
      });
      return false;
    }
  }

  parseUserDetailsFromToken() {
    if (localStorage.getItem('access_token')){
      const decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
      console.log(decodedToken);
      
      this.user = decodedToken.id;
      this.exp = decodedToken.exp;
      sessionStorage.setItem('user', this.user);
    }
  }

}