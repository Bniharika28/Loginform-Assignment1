import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LoginState } from '../store/login.state';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;
  const initialState: LoginState = {
    user: null,
    errorMessage: '',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [provideMockStore({ initialState }),
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store.setState({
      user: null,
      errorMessage: '',
    });
    component.ngOnInit();
    fixture.detectChanges();
  });
  
  // it('submitting a form ', () => {
  //   expect(component.loginForm.valid).toBeFalsy();
  //   component.loginForm.controls.email.setValue('test@test.com');
  //   component.loginForm.controls.password.setValue('123456');
  //   component.onLoginSubmit();
  //   expect(component.loginForm.valid).toBeTruthy();
  // });
  // it('submitting a form with invalid form', () => {
  //   expect(component.loginForm.valid).toBeFalsy();
  //   component.loginForm.controls.email.setValue('test@test');
  //   component.loginForm.controls.password.setValue('12345');
  //   component.onLoginSubmit();
  //   expect(component.loginForm.valid).toBeFalsy();
  // });
});

