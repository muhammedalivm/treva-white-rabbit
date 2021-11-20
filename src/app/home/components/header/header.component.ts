import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
