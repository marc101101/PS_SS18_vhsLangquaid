import {
  Component,
  OnInit
} from '@angular/core';
import { Location } from '@angular/common';

import { CommunicationService } from './shared/communication.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public menuOpen: boolean = false;
  public courseView: boolean = false;

  constructor(public comService: CommunicationService, private _location: Location) {

  }

  ngOnInit() {
    this.comService.instruction_sub_comb.subscribe(message =>{    
      this.menuOpen = message;
    });

    this.comService.course_sub_comb.subscribe(message =>{    
      this.courseView = message;
    });
  }

  setMenu() {
    this.menuOpen = !this.menuOpen;
  }

  backClicked():void {
    this._location.back();
    this.comService.sendCourseViewMessage(false);
  }

}