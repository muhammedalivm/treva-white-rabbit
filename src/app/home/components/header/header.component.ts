import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('Username');
  }

  menuOpen() {
    let body = document.getElementsByTagName('body')[0];
    let pageNavList = document.getElementsByClassName("pageNavList")[0];
    body.classList.add("overlayIn");
    pageNavList.classList.add("pageNavList--active")
  }

  menuClose() {
    let body = document.getElementsByTagName('body')[0];
    let pageNavList = document.getElementsByClassName("pageNavList")[0];
    body.classList.remove("overlayIn");
    pageNavList.classList.remove("pageNavList--active")
  }

  logout() {
    this.router.navigate(['/login']);
    sessionStorage.removeItem("Username");
  }

}
