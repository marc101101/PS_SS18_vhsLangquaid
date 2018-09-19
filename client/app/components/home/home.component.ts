import {
  Component,
  OnInit
} from '@angular/core';
import { CommunicationService } from './shared/communication.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public menuOpen: boolean = false;

  constructor(public comService: CommunicationService) {

  }

  ngOnInit() {
    this.comService.instruction_sub_comb.subscribe(message =>{    
      this.menuOpen = message;
    });
  }

  setMenu() {
    this.menuOpen = !this.menuOpen;
  }

}