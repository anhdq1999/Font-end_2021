import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
 public keyWord;
 public term;
 items = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
  constructor() { }

  ngOnInit(): void {
  }

}
