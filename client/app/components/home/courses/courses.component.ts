import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CommunicationService } from '../shared/communication.service';
import { log } from 'util';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements AfterViewInit {

  @ViewChild('backgroundElement') backgroundElement: ElementRef;

  public dataIsAvailable: boolean = false;
  public courses: Array<any>;
  public headerText: string;

  constructor(
  public categoryService: CategoryService,
  public userService: UserService,
  private activatedRoute: ActivatedRoute,
  public comService: CommunicationService,
  public renderer: Renderer2) {}

  ngAfterViewInit() {
    this.comService.getColor().subscribe(color => {         
      this.renderer.addClass(this.backgroundElement.nativeElement, color);
    });

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
    this.userService.getCoursesByUser().subscribe(response =>{    
      this.courses = response;       
      if(response.name != "HttpResponseError"){
        this.dataIsAvailable = true;  
        this.courses = response;
      }
    });
  }

  requestCoursesByCategory(courseId: string):void{
    this.categoryService.getCoursesByCategoryId(courseId).subscribe(response =>{    
      this.courses = response;       
      if(response.name != "HttpResponseError"){
        this.dataIsAvailable = true;  
        this.courses = response;
      }
    });
  }

}
