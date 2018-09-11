import { Component, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CommunicationService } from '../shared/communication.service';
import { log } from 'util';
import { UserService } from '../../../services/user.service';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @ViewChild('backgroundElement') backgroundElement: ElementRef;

  public dataIsAvailable: boolean = false;
  public courses: Array<any>;
  public headerText: string = "";
  public category: string = "";

  constructor(
  public coursesService: CoursesService,
  public categoryService: CategoryService,
  public userService: UserService,
  private activatedRoute: ActivatedRoute,
  public comService: CommunicationService,
  public renderer: Renderer2) { 
    this.comService.getInfo().subscribe(color => {   
      //this.renderer.addClass(this.backgroundElement.nativeElement, color);
    });  
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {     
      if(params.id == "me"){
        this.requestCoursesByUser();
      }
      else{
        this.requestCoursesByCategory(params.id);    
      }      
    });
  }

  requestCoursesByUser():void{
    this.headerText = "Meine";
    this.userService.getCoursesByUser().subscribe(response =>{    
      response.forEach(element => {
        this.courses = [];
        this.coursesService.getCoursesByCourseId(element.ANM_KURS_ID).subscribe(response => {
          response.ANM_DATUM = element.ANM_DATUM;
          this.courses.push(response);
        });
      });
      if(response.name != "HttpResponseError"){
        this.dataIsAvailable = true;  
      }
    });
  }

  requestCoursesByCategory(courseId: string):void{
    this.headerText = this.category;
    this.categoryService.getCoursesByCategoryId(courseId).subscribe(response =>{    
      this.courses = response;       
      if(response.name != "HttpResponseError"){
        this.dataIsAvailable = true;  
        this.courses = response;
      }
    });
  }

}
