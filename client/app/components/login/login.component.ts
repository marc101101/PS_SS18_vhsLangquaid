import {
  Component,
  OnInit
} from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { UserData } from '../../model/UserData';
import { JwtHelper } from 'angular2-jwt';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { log } from 'util';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: UserData = new UserData("", "");  
  private jwtHelper: JwtHelper = new JwtHelper();
  private returnUrl: string;

  constructor(private authSerive: AuthService, private router:Router, private alertService: AlertService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/categories';
  }

  onSubmit() {
    this.authSerive.login(this.model).subscribe(data => {
      // login successful if there's a jwt token in the response
      if (data.token && !this.jwtHelper.isTokenExpired(data.token)) {
        // store jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', data.token);       
        this.router.navigate(['/categories']).catch(error => {
          console.log(error);
        });
      }
    });
  }

}