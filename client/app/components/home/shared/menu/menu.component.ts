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

export class MenuComponent implements OnInit {

  constructor(public router:Router, public authService: AuthService, public comService: CommunicationService) {}

  ngOnInit() {
    
  }

  routing(path): void{
    this.comService.sendMessage(false);
    this.router.navigate([path]);
  }

  signOut():void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
