import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/User';
import {Location} from '@angular/common';


@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  public user: User;
  public dataIsAvailable: boolean = false;
  public circleSpinning: boolean = false;

  constructor(private userService:UserService, private _location: Location) { }

  ngOnInit() {
    this.userService.getUserMe().subscribe(response => {
      this.user = response;
    });
  }

  onSubmit() {
    this.circleSpinning = true;
    this.userService.updateUserMe(this.user).subscribe(response => {
      this.dataIsAvailable = true;
      this.circleSpinning = false;
    });
  }

  backClicked() {
    this._location.back();
}

}
