import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommunicationService } from '../shared/communication.service';
import { CoursesService } from '../shared/courses.service';
import { log } from 'util';

@Component({
  selector: 'categories',
  templateUrl: './singlecourse.component.html',
  styleUrls: ['./singlecourse.component.scss']
})
export class SingleCourseComponent implements OnInit {
  public dataIsAvailable: boolean = false;
  public singleCourse: any;

  constructor(
    private router: Router, 
    public comService: CommunicationService,
    public activatedRoute: ActivatedRoute,
    public courseService: CoursesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {     
      this.courseService.getCoursesByCourseId(params.id).subscribe(response =>{    
        if(response.name != "HttpResponseError"){
          this.singleCourse = response;
          console.log(this.singleCourse);
          
          this.dataIsAvailable = true;  
        }
      });
    });
  }
}
