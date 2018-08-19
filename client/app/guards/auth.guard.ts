import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuard {

  private jwtHelper: JwtHelper = new JwtHelper();

  constructor( private authService : AuthService, private router : Router ) {
  }

  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
    
    if(this.authService.isLoggedIn() && !this.jwtHelper.isTokenExpired(localStorage.getItem('token'))){
        return true;
    }
    else{
      this.router.navigate(['/login']).catch(error => {
        console.log(error);        
      });
      return false;
    }
  }
}