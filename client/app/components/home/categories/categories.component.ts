import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: Array<any>;
  public colorArray: Array<any> = ["primary", "link", "danger", "success", "warning", "info"]

  constructor(public categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(response =>{
      this.categories = response;
    });
  }

}
