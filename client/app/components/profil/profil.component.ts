import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/User';

@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  public user: User;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUserMe().subscribe(response => {
      this.user = response;
    });
  }

}
