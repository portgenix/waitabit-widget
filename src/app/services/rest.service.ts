import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apitoken: any;
  url: string; 

  constructor(private http: HttpClient) {
  }


  post(apitoken,payload: any) {
    this.url="https://api.waitabit.dev/waitlist"
    return this.http.post(this.url, payload, {
      headers: new HttpHeaders({ 'x-api-token': apitoken })
     });

  }

  
 
}

