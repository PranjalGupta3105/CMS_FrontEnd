import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  loginapiURL: string = "http://localhost:4000/api/login";
  getallScheduledapiURL: string = "http://localhost:4000/api/ScheduledInterviews";

  constructor(private httpClient: HttpClient) { }

  public ValidateRequestedAuthentication(username, password){
    return this.httpClient.post(this.loginapiURL, {username, password});
  }

  public GetAllScheduledInterviews()
  {
    return this.httpClient.get(this.getallScheduledapiURL);
  }
}
