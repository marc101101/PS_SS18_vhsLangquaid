import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild('searchElement') searchElement: ElementRef;

  public courses: any;
  public dataIsAvailable: boolean = false;

  constructor(
    private coursesService: CoursesService,
    private _location: Location,
    private renderer: Renderer2) { }

  onSubmit():void {
    this.coursesService.getSearchCourses(this.searchElement.nativeElement.value).subscribe(response => {
      if(response.name != "HttpResponseError"){
        this.courses = response;
        this.dataIsAvailable = true;     
      }  
    });
  } 

}
