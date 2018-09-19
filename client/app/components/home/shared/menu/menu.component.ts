import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { log } from 'util';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { CommunicationService } from '../communication.service';

@Component({
  moduleId: module.id,
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  constructor(public router:Router, public authService: AuthService, public comService: CommunicationService) {}


  routing(path?): void{
    this.comService.sendMessage(false);
    if(path){
      this.router.navigate([path]);    
    }
  
  }

  closeMenu():void{
    this.comService.sendMessage(false);
  }

  signOut():void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
