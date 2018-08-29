import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @ViewChild('save') saveButton: ElementRef;

  public user: any;
  public dataIsAvailable: boolean = false;
  public button_text: string = 'Speichern';
  public menuState: boolean = false;

  constructor(
    private userService:UserService, 
    private _location: Location,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.userService.getUserMe().subscribe(response => {    
      this.dataIsAvailable = true; 
      this.user = response;
    });
  }

  onSubmit() {
    this.userService.updateUserMe(this.user).subscribe(response => {
      if(response.name != "HttpResponseError"){
        this.renderer.addClass(this.saveButton.nativeElement, 'is-primary-save');
        this.button_text = 'Speichern erfolgreich';
      }  
    });
  }

  resetButton() {
    this.renderer.removeClass(this.saveButton.nativeElement, 'is-primary-save');
      this.button_text = 'Speichern';
  }

  backClicked() {
    this._location.back();
}

}
