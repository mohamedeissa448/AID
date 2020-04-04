import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { settings } from '../config';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }
  login(credentials){
     /**token-payload={
  "roles": ["admin"],
   "id":"123",
  "name": "admin",
  "iat": 1516239022
  } 
   return this.http.post(settings.serverUrl,credentials).pipe(map((response :any)=>{
      response.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJhZG1pbiJdLCJpZCI6IjEyMyIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTUxNjIzOTAyMn0.kAaEJz6ca2CjXmNOI1nmwmINF7bf4CPzHjYPWSjn4a0"
    if (response && response.token) {
   localStorage.setItem("token", response.token);
   return true;
 }
 return false;
}))  */return true
  }
  logOut() {
    this.router.navigate(["login"]);
    localStorage.removeItem("token");
  }
  isLogedIn() {
    let jwtHelper = new JwtHelperService();
    const token = localStorage.getItem("token");
    if (!token) return false;
    //console.log("token", token);
    // console.log("isexpired", jwtHelper.isTokenExpired(token));

    return !jwtHelper.isTokenExpired(token);
  }
  get currentUser() {
    let token = localStorage.getItem("token");
    if (!token) return null;
    //console.log("decoded token ", new JwtHelperService().decodeToken(token));
    return new JwtHelperService().decodeToken(token);
  }
}
