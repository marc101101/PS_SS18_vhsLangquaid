import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommunicationService } from '../shared/communication.service';
import { CoursesService } from '../shared/courses.service';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { log } from 'util';

@Component({
  selector: 'categories',
  templateUrl: './singlecourse.component.html',
  styleUrls: ['./singlecourse.component.scss']
})
export class SingleCourseComponent implements OnInit {
  public dataIsAvailable: boolean = false;
  public singleCourse: any;
  public button_text: string = "Anmelden";
  public showButton: boolean = false;
  public alreadyApplied: boolean = false;

  @ViewChild('button') elButton: ElementRef;

  constructor(
    private router: Router, 
    private renderer: Renderer2,
    public comService: CommunicationService,
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public courseService: CoursesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {     
      this.courseService.getCoursesByCourseId(params.id).subscribe(response =>{    
        if(response.name != "HttpResponseError"){
          this.singleCourse = response;         
          this.dataIsAvailable = true;  
          this.checkLogin();
        }
      });
    });
  }

  checkLogin(){
    this.authService.isLoggedIn().subscribe(response =>{
      if(response){
        this.showButton = true;
        this.checkAlreadyApplied();
      }
    });
  }

  checkAlreadyApplied(){
    this.userService.getCoursesByUser().subscribe(response =>{      
      response.forEach(element => {
        if(element.KURS_ID == this.singleCourse.KURS_ID){
            this.alreadyApplied = true;
            this.button_text = "Abmelden";
          }
      });      
    });
  }

  apply(){
    this.courseService.applyToCourse(this.singleCourse.KURS_ID).subscribe(response =>{
      this.renderer.addClass(this.elButton.nativeElement, 'is-primary-save');
      this.button_text = 'Anmelden erfolgreich';
    });
  }

  signOff(){
    this.courseService.signOffToCourse(this.singleCourse.KURS_ID).subscribe(response =>{
      this.renderer.addClass(this.elButton.nativeElement, 'is-primary-save');
      this.button_text = 'Abmelden erfolgreich';
    });
  }
}
