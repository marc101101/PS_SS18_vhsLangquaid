import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../../../services/alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../sharedModule/shared.module';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/from';
import { CategoryService } from '../../../services/category.service';
import { CommunicationService } from '../shared/communication.service';
import { CategoriesComponent } from './categories.component';
import {Location} from "@angular/common";



/**
  * Test should test all four methods of courses.component.ts
  * ngOnInit() / routeToCourse()
**/
describe('CategoriesComponent', () => {
  let categoriesModel = [{
    "KURS_NAME":"Test Kurs",
    "KURS_BESCHREIBUNG": "Test Kurs Beschreibung"
  }];

  var fixture;
  var component;
  var categoryService: CategoryService;
  var location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesComponent ],
      imports: [ HttpClientModule, RouterTestingModule, SharedModule ],
      providers: [ CategoryService, AlertService, CommunicationService, Location],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    categoryService = fixture.debugElement.injector.get(CategoryService);
    location = TestBed.get(Location);
  }));

  it('CategoriesComponent: should successfuly be able to create a CategoriesComponent', () => {
    expect(fixture.componentInstance instanceof CategoriesComponent).toBe(true, "should create CategoriesComponent");
  });

  //test ngOnit methods and check its effects by mocking userService method getUserMe
  it("CategoriesComponent: ngOnit() sets categories and dataIsAvailable values correctly", fakeAsync(() => {
    //set preconditions 
    spyOn(categoryService, "getAllCategories").and.returnValue(Observable.of(categoriesModel));
    //call testing method
    component.ngOnInit();
    //check results
    fixture.detectChanges();
    expect(component.categories).toBe(categoriesModel);
    expect(component.dataIsAvailable).toBe(true);
  }));

  it('CategoriesComponent: navigate to course(id: 1111) redirects you to /#/home/kurs-uebersicht/1111', fakeAsync(() => { 
    component.routeToCourse("1111", "primary");
    tick(50); 
    expect(location._platformStrategy.internalPath).toBe('/#/home/kurs-uebersicht/1111'); 
  }));
});
