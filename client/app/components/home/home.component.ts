import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public menuOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
   
  }

    setMenu() {
      this.menuOpen = !this.menuOpen;
    }

  }