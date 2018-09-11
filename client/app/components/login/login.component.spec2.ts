import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertComponent } from '../../sharedModule/alert/alert.component';
import { SharedModule } from '../../sharedModule/shared.module';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, HttpClientModule, RouterTestingModule, SharedModule ],
      providers: [ AuthService, AlertService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(LoginComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
  
});
