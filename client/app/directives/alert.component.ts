import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { AlertService } from '../services/alert.service';
import { log } from 'util';

@Component({
  moduleId: module.id,
  selector: 'alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit, OnDestroy {
  message: any;
  private subscription: Subscription;
  public navStatus = true;

  constructor(private alertService: AlertService, private changeDetectorRef:ChangeDetectorRef) {}

  ngOnInit() {
    if (this.alertService.getStatusText()) {
      this.message = {text: this.alertService.getStatusText()};
    }
    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message; 
    });   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
