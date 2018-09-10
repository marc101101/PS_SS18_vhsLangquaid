import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../../services/alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../sharedModule/shared.module';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/from';
import {Location} from "@angular/common";
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

/*
  * Test should test all four methods of courses.component.ts
  * onSubmit()
**/
describe('RegistrationComponent', () => {
  var fixture;
  var component;
  var authSerive: AuthService;
  var location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [ FormsModule, HttpClientModule, RouterTestingModule, SharedModule ],
      providers: [ AuthService, AlertService, Location ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    authSerive = fixture.debugElement.injector.get(AuthService);
    location = TestBed.get(Location);
  }));

  it('RegistrationComponent: should successfuly be able to create a LoginComponent', () => {
    expect(fixture.componentInstance instanceof RegistrationComponent).toBe(true, "should create RegistrationComponent");
  });

  //test ngOnit methods and check its effects by mocking userService method getUserMe
  it("RegistrationComponent: onSubmit() with valid user routes to /#/home/kategorien", fakeAsync(() => {
    //set preconditions     
    //spyOn(authSerive, "login").and.returnValue(Observable.of(userModel));
    //call testing method
    //component.onSubmit();
    //check results
    //fixture.detectChanges();
    //tick(50); 
    //expect(localStorage.getItem("token")).toBe(userModel.token);   
    //expect(location._platformStrategy.internalPath).toBe('/#/home/kategorien'); 
  }));
 
});

