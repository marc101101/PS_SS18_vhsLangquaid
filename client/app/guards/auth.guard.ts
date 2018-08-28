import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard {

  private jwtHelper: JwtHelperService = new JwtHelperService();

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