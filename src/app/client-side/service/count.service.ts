import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  baseUrl: string = environment.baseUrl;
  ApiEndPoint: string = '/seat';

  constructor(private httpCLient: HttpClient) {}
  countSeat(count: any): Observable<any> {
    return this.httpCLient.get<any>(this.baseUrl.concat(this.ApiEndPoint));
  }


}
