import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BrokerBackendService } from '../brocker-backend/brocker-backend.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpointPosts = '/users'


  constructor(private brokerBackend: BrokerBackendService
    ,private http: HttpClient) { 
  }

  getUserByID(id:number): Observable<any> {
    return this.brokerBackend
        .connectInBackend(
          this.endpointPosts +"/" + id,
          'GET',
          undefined,
          this.getSimpleHeader()
        );
  }

  getSimpleHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }


}
