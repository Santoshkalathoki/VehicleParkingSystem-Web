import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  baseUrl: string = environment.baseUrl;
  ApiEndPoint: string = '/booking';

  constructor( private httpCLient: HttpClient) { }

  getAll(user:any): Observable<any>{
    return this.httpCLient.get<any>(
      this.baseUrl.concat(this.ApiEndPoint)
    );
  }
  onEditUserr(){}

  updateProfile(user: any): Observable<any> {
    return this.httpCLient.post<any>(this.baseUrl.concat(this.ApiEndPoint), user);
  }

}
