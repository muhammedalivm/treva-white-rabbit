import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginData: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {

  }

  login() {
    return this.httpClient.get("./assets/accounts.json");
  }

}
