import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() {
  }
  login(formFields: any): void {
    if (formFields.username && formFields.password) {
      location.href = "/#/";
    }
  }
  ngOnInit() {
  }
}
