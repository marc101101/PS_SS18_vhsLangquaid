import { async, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../../../services/alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../sharedModule/shared.module';
import { UserService } from '../../../services/user.service';
import { Observable, of } from 'rxjs';
import { By } from "@angular/platform-browser";
import 'rxjs/add/observable/from';
import { CoursesComponent } from './courses.component';
import { CategoryService } from '../../../services/category.service';
import { CommunicationService } from '../shared/communication.service';


/**
  * Test should test all four methods of courses.component.ts
  * ngOnInit() 
**/
describe('CoursesComponent', () => {
  let coursesModel = [{
    "KURS_NAME":"Test Kurs",
    "KURS_BESCHREIBUNG": "Test Kurs Beschreibung"
  }];

  var fixture;
  var component;
  var categoryService: CategoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      imports: [ HttpClientModule, RouterTestingModule, SharedModule ],
      providers: [ CategoryService, AlertService, CommunicationService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    categoryService = fixture.debugElement.injector.get(CategoryService);
  }));

  it('CoursesComponent: should successfuly be able to create a CoursesComponent', () => {
    expect(fixture.componentInstance instanceof CoursesComponent).toBe(true, "should create CoursesComponent");
  });

  //test ngOnit methods and check its effects by mocking userService method getUserMe
  it("CoursesComponent: ngOnit() sets user and dataIsAvailable values correctly", fakeAsync(() => {
    //set preconditions 
    spyOn(categoryService, "getCoursesByCategoryId").and.returnValue(Observable.of(coursesModel));
    //call testing method
    component.ngOnInit();
    //check results
    fixture.detectChanges();
    expect(component.courses).toBe(coursesModel);
    expect(component.dataIsAvailable).toBe(true);
  }));
});
