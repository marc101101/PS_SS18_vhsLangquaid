import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { CommunicationService } from '../_services/communication.service';
import { AlertService } from '../_services';

@Component({
  moduleId: module.id,
  selector: 'alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit, OnDestroy {
  message: any;
  private subscription: Subscription;
  public navStatus = true;

  constructor(private alertService: AlertService, private comService: CommunicationService, private changeDetectorRef:ChangeDetectorRef) {}

  ngOnInit() {
    if (this.alertService.getStatusText()) {
      this.message = {text: this.alertService.getStatusText()};
    }
    this.subscription = this.alertService.getMessage().subscribe(message => {this.message = message; });

    this.comService.instruction_sub_comb.subscribe(param =>{
      this.navStatus = param.status;
      this.changeDetectorRef.detectChanges();
      console.log(param);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
