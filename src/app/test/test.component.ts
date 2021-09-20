import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NewsRss } from "../Service/news";
import { ServesHttpService } from "../Service/service.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  public dataNews : NewsRss;
  isShow = true;
  public term;
  items = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];

  constructor(private service : ServesHttpService ,private router :Router ) {}

  ngOnInit(): void {
    this.service.getBanDoc().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  keyWord() {
    this.isShow= false;
   
  }

  
  onSelect(item : any){
    this.router.navigate(['/ban-doc',item.title])
  }
}
