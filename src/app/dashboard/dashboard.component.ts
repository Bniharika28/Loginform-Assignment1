import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { LoginState } from '../store/login.state';
import { getUser } from '../store/selectors/login.selectors';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  email: Observable<User | null | undefined> | undefined  ;
  constructor(private store: Store<LoginState>) { }

  ngOnInit(): void {
    this.email = this.store.select(getUser);
  }
}
