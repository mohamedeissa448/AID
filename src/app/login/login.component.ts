import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
   invalidLogedIn=false
  constructor(private authService:AuthService,private router:Router) { }
  login(credentials){
   const result= this.authService.login(credentials)/*.subscribe((result:boolean)=>{
      if (result)
      this.router.navigate[''];
      else
      this.invalidLogedIn=true
    })*/
    if (result)
      this.router.navigateByUrl("");
      else
      this.invalidLogedIn=true
  }
 

}
