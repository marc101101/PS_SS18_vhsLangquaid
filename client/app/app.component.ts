import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

    mobile: boolean = false;
    calcHeight: number;
    frameHeight: number;
    frameWidth: number;
    
    constructor() {

    }

    ngOnInit(){
      //X = 920 / 960 0,958333333333333
      //X = 380 / 960 0,3958333333 
      //X = 607 / 960 0,6322916667
      this.calcHeight = window.innerHeight * 0.958;
      this.frameHeight = window.innerHeight * 0.662;
      this.frameWidth = window.innerHeight * 0.395;

      var ua = navigator.userAgent;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
        this.mobile = true;
      else
        this.mobile = false;
    }

}

