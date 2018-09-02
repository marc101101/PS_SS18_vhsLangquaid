import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { CoursesService } from '../shared/courses.service';
import { ActivatedRoute, Params } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public dataIsAvailable: boolean = false;
  public courses: Array<any>;

  constructor(public coursesService: CoursesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      
      this.coursesService.getCoursesByCategoryId().subscribe(response =>{    
        if(response.name != "HttpResponseError"){
          this.dataIsAvailable = true;  
          this.courses = response;
        }
      });
    });
  }

}
