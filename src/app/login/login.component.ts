import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {
  }
  login(formFields) {
    if (formFields.email && formFields.password) {
      this.authService.login(formFields.email, formFields.password)
        .subscribe(
          () => {
            console.log("User is logged in");
            location.href="/#/";
          }
        );
    }
  }

  ngOnInit() {
  }

}
