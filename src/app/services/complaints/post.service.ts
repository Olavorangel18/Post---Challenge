import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BrokerBackendService } from '../brocker-backend/brocker-backend.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  endpointPosts = '/posts'


  constructor(private brokerBackend: BrokerBackendService
    ,private http: HttpClient) { 
  }

  getPosts(): Observable<any> {
    return this.brokerBackend
        .connectInBackend(
          this.endpointPosts,
          'GET',
          undefined,
          this.getSimpleHeader()
        );
  }

  getPostByID(id:number): Observable<any> {
    return this.brokerBackend
        .connectInBackend(
          this.endpointPosts +"/" + id,
          'GET',
          undefined,
          this.getSimpleHeader()
        );
  }

  getPostByIDComments(id:number): Observable<any> {
    return this.brokerBackend
        .connectInBackend(
          this.endpointPosts +"/" + id + "/comments",
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
