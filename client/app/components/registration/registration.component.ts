import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public state: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
