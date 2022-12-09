import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/auth/login/LoginResponse';
import { LogoutRequest } from 'src/app/auth/login/LogoutRequet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrlEndPoint: string = '/users/login';
  logoutEndpoint: string = '/users/logout';
  registerApiUrlEndPoint: string = '/users';
  baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  IsLoggedIn(){
    return !! localStorage.getItem('userId');
  }

  login(login: any): Observable<LoginResponse> {
    console.log(login);
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.apiUrlEndPoint),
      login
    );
  }

  logout(logoutRequest: LogoutRequest): Observable<any> {
    console.log("auth service called");
    return this.httpClient.post<LogoutRequest>(
      this.baseUrl.concat(this.logoutEndpoint),
      logoutRequest
    );
  }

  registerUsers(user: any): Observable<any> {
    console.log(user);
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.registerApiUrlEndPoint),
      user
    );
  }

  getUserDetailsById(UserId:any):Observable<any>{
    return this.httpClient.get(environment.baseUrl+ 'users/' + `${UserId}`,UserId)
  }
}
