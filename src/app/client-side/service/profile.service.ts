import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  apiUpdateUserUrl: string = '/users';
  baseUrl: string = environment.baseUrl;
  userId=localStorage.getItem('userId');;
  constructor(private httpClient: HttpClient) {}

updateUser(user: any): Observable<any> {
    console.log(user);
    return this.httpClient.put<any>(
      this.baseUrl.concat(this.apiUpdateUserUrl+'/'+this.userId),
      user
    );
  }
  getUserById(userId: any): Observable<any> {
    // console.log(user);
    return this.httpClient.get<any>(
      this.baseUrl.concat(this.apiUpdateUserUrl+'/by-id/'+this.userId),
      userId
    );
  }
}