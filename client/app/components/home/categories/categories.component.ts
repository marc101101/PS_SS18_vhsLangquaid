import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public dataIsAvailable: boolean = false;
  public categories: Array<any>;
  public colorArray: Array<any> = ["primary", "link", "danger", "success", "warning", "info"];

  constructor(public categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(response =>{    
      if(response.name != "HttpResponseError"){
        this.dataIsAvailable = true;  
        this.categories = response;
      }
    });
  }

}
