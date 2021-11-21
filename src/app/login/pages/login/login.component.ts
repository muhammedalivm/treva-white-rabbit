import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(sessionStorage.getItem('Username'));
    if(sessionStorage.getItem('Username')) this.router.navigate(['/home']);
  }

  login() {
    this.errorMessage = '';
    this.loginService.login().subscribe(data => {
      if (data['username'] === this.loginForm.value.username && data['password'] === this.loginForm.value.password) {
        sessionStorage.setItem("Username",data['username']);
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid Username or Password';
      }
    });
  }

}
