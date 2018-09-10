import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CommunicationService } from '../shared/communication.service';
import { log } from 'util';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @ViewChild('backgroundElement') backgroundElement: ElementRef;

  public dataIsAvailable: boolean = false;
  public courses: Array<any>;

  constructor(public categoryService: CategoryService,
  private activatedRoute: ActivatedRoute,
  public comService: CommunicationService,
  public renderer: Renderer2) { 
    this.comService.getColor().subscribe(color => {   
      //this.renderer.addClass(this.backgroundElement.nativeElement, color);
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {     
      this.categoryService.getCoursesByCategoryId(params.courseId).subscribe(response =>{    
        this.courses = response;       
        if(response.name != "HttpResponseError"){
          this.dataIsAvailable = true;  
          this.courses = response;
        }
      });
    });
  }

}
