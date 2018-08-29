import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: Array<any>;

  constructor(public categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(response =>{
      console.log(response);
      this.categories = response;
    });
  }

}
