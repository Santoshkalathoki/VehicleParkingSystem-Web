import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
 
  apiUrl: string = '/booking';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  bookSeat(user: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl.concat(this.apiUrl), user);
  }

}
