import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Authenticate } from '../models/authentication.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  authenticate(email: string, password: string): Observable<Authenticate> {
    return this.http.post<Authenticate>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`, { email, password, returnSecuretoken: true });
  }

  formatUser(data: Authenticate): User {
    const user = new User(data.email, data.idToken, data.localId);
    return user;
  }
  getErrorMessage(message: string): string {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }
}
