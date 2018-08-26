import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../../model/RegisterUser';
import { UserService } from '../../services/user.service';
import { log } from 'util';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public state: number = 0;
  public user: RegisterUser = new RegisterUser("", "", "", "", null, 0, new Date(Date.now()), new Date(Date.now()), "", "", "", "", "", "", 0);
  public agb_state: boolean = false;
  public dse_state: boolean = false;

  constructor(public userService:UserService) { }

  ngOnInit() {

  }

  onSubmit(): void{
    if(this.agb_state && this.dse_state){
      console.log(this.user);
      
      this.userService.registerUser(this.user).subscribe(response => {
        console.log(response);        
      });
    }
  }

}
