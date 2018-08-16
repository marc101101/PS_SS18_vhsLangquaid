import {
  Component,
  OnInit
} from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { UserData } from '../../model/UserData';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: UserData = new UserData("", "");  

  constructor(private authSerive: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    console.log("SUBMIT");
    this.authSerive.login(this.model).subscribe(response => {
      console.log(response);
    });
  }

}