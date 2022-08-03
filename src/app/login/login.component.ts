import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:LoginViewModel = {
    username:""
  };

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    localStorage.setItem("recipient", this.model.username);
    window.location.href = environment.baseFrontendUrl + "messages";
  }

}
export interface LoginViewModel {
  username:string;
}
