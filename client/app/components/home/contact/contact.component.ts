import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public dataIsAvailable: boolean = false;
  public button_text: string = "Feedback senden"
  public contactMessage: any = {
    text: "",
    bewertung: null,
  };

  @ViewChild('send') sendButton: ElementRef;

  constructor(
    private router: Router, 
    private renderer: Renderer2,
    private contactService: ContactService) { }

  submit():void{
    this.contactService.postContactFeedback(this.contactMessage).subscribe(response => {
      if(response.name != "HttpResponseError"){
        this.renderer.addClass(this.sendButton.nativeElement, 'is-primary-save');
        this.button_text = 'Senden erfolgreich';
      }  
    });
  }
}
