import { async, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../../../services/alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../sharedModule/shared.module';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/from';
import { CoursesComponent } from './courses.component';
import { CommunicationService } from '../shared/communication.service';
import { UserService } from '../../../services/user.service';
import { CoursesService } from '../shared/courses.service';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute } from '@angular/router';


/**
  * Test should test all four methods of courses.component.ts
  * requestCoursesByUser() / requestCoursesByCategory()
**/
describe('CoursesComponent', () => {
  let userCoursesModel = [
    {
      "ANM_KURS_ID": 1,
      "ANM_DATUM": "00-00-00"
    },
    {
      "ANM_KURS_ID": 2,
      "ANM_DATUM": "00-00-00"
    }
  ];

  let coursesByCourseIdModel = [{
    "ANM_DATUM": "00-00-00",
    "KURS_NAME": "Testname",
    "KURS_BESCHREIBUNG": "Testbeschreibung"
  }];

  var fixture;
  var component;
  var userService: UserService;
  var coursesService: CoursesService;
  var categoryService: CategoryService;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ],
      imports: [ HttpClientModule, RouterTestingModule, SharedModule ],
      providers: [ 
        CategoryService, 
        AlertService, 
        CommunicationService, 
        UserService, 
        CoursesService, 
        {
          provide: ActivatedRoute, 
          useValue: { 
            params: Observable.of({ id: 'me' })
          }
        }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    coursesService = fixture.debugElement.injector.get(CoursesService);
    categoryService = fixture.debugElement.injector.get(CategoryService);
  }));

  it('CoursesComponent: should successfuly be able to create a CoursesComponent', () => {
    expect(fixture.componentInstance instanceof CoursesComponent).toBe(true, "should create CoursesComponent");
  });


});
