import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../../../sharedModule/alert.service';
import { AuthService } from '../../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfilComponent } from './profil.component';
import { UserService } from '../../../services/user.service';

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilComponent ],
      imports: [ FormsModule, HttpClientModule, RouterTestingModule ],
      providers: [ UserService, AlertService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
