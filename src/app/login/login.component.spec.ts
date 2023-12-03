import { ComponentFixture, TestBed, fakeAsync, inject, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthenticationService } from 'src/services/authentication.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let AuthenticationService:AuthenticationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthenticationService, useValue: AuthenticationService },
               ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

  
 
});
