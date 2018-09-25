import {
  Component,
  OnInit
} from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { UserData } from '../../models/UserData';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public model: UserData = new UserData("", "");  
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private authSerive: AuthService, private router:Router) {}

  onSubmit() {
    this.authSerive.login(this.model).subscribe(response => {
      // login successful if there's a jwt token in the response   
      console.log("erer", response);   
      if (response.token && !this.jwtHelper.isTokenExpired(response.token)) {
        // store jwt token in local storage to keep user logged in between page refreshes
        
        localStorage.setItem('token', response.token);  

        this.router.navigate(['/home/kategorien']);
      }
    });
  }

}