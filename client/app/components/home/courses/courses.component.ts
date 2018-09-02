import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public dataIsAvailable: boolean = false;
  public courses: Array<any>;

  constructor(public categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(response =>{    
      if(response.name != "HttpResponseError"){
        this.dataIsAvailable = true;  
        this.courses = response;
      }
    });
  }

}
