import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  loginapiURL: string = "http://localhost:4000/api/login";
  getallScheduledapiURL: string = "http://localhost:4000/api/ScheduledInterviews";
  newinterviewURL: string = "http://localhost:4000/api/RegisterNewInterview";
  updateInterviewURL: string = "http://localhost:4000/api/UpdateInterviewDetails/";
  deleteInterviewURL: string = "http://localhost:4000/api/RemoveSavedInterview/";

  constructor(private httpClient: HttpClient,private cookieService: CookieService) { }

  public ValidateRequestedAuthentication(username, password){
    return this.httpClient.post(this.loginapiURL, {username, password});
  }

  public GetAllScheduledInterviews()
  {
    var authtoken = this.cookieService.get("AuthToken");
    // console.log("This is the Access Token I have received"+"\n"+JSON.parse(authtoken)["access_token"]);
    
    const headers = new HttpHeaders().set("Authorization", "Bearer "+JSON.parse(authtoken)["access_token"]);
    return this.httpClient.get(this.getallScheduledapiURL,{headers});
  }

  public AddNewInterview(registerInterview){
    var authtoken = this.cookieService.get("AuthToken");
    console.log("This is the Access Token I have received"+"\n"+JSON.parse(authtoken)["access_token"]);
    const headers = new HttpHeaders().set("Authorization", "Bearer "+JSON.parse(authtoken)["access_token"]);
    return this.httpClient.post(this.newinterviewURL, registerInterview, {headers});
  
  }

  public UpdateInterviewDetails(interviewId, updatedDetails){
    var authtoken = this.cookieService.get("AuthToken");
    console.log("This is the Access Token I have received"+"\n"+JSON.parse(authtoken)["access_token"]);

    const headers = new HttpHeaders().set("Authorization","Bearer "+JSON.parse(authtoken)["access_token"]);

    return this.httpClient.put(this.updateInterviewURL+interviewId, updatedDetails, {headers});
  }

  public DeleteInterviewDetails(interviewId){
    var authtoken = this.cookieService.get("AuthToken");
    console.log("This is the Access Token I have received"+"\n"+JSON.parse(authtoken)["access_token"]);

    const headers = new HttpHeaders().set("Authorization","Bearer "+JSON.parse(authtoken)["access_token"]);

    return this.httpClient.delete(this.deleteInterviewURL+interviewId,{headers} );
  }
}
