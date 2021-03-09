import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginStart } from '../store/actions/login.actions';
import { LoginState } from '../store/login.state';
import { getErrorMessage } from '../store/selectors/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: Observable<string>;
  constructor(private store: Store<LoginState>) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
   }

  ngOnInit(): void {
    this.errorMessage = this.store.select(getErrorMessage);
   
  }
  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.store.dispatch(loginStart({ email, password }));
    }

}
}