import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public dataIsAvailable: boolean = false;
  public singleCourse: any;
  public button_text: string = "Anmelden";
  public showButton: boolean = false;
  public alreadyApplied: boolean = false;

  @ViewChild('button') elButton: ElementRef;

  constructor(
    private router: Router, 
    private renderer: Renderer2) { }

  ngOnInit() {
    
  }
}
