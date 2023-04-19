import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './login/login-response';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.loginUrl}/User/login`, { email:username, password });
  }
  
  register(user : any) {
    return this.http
    .post<any>(
      `${environment.loginUrl}/User/registration`,
      user
    );
  }

  changePassword(changePAssword : any) {
    var retrievedObject = localStorage.getItem('user-data');
    return this.http
    .post<any>(
      `${environment.loginUrl}/User/change-password`,
      { 
      email: JSON.parse(retrievedObject || '{}')?.user?.email,
      currentPassword: changePAssword.currentPassword,
      newtPassword: changePAssword.newPassword
     }
    );
  }
}
