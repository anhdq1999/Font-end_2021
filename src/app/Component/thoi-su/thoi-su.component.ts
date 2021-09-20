import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NewsRss } from "src/app/Service/news";
import { ServesHttpService } from "src/app/Service/service.service";

@Component({
  selector: "app-thoi-su",
  templateUrl: "./thoi-su.component.html",
  styleUrls: ["./thoi-su.component.scss"],
})
export class ThoiSuComponent implements OnInit {
  public dataNews: NewsRss;

  constructor(private service: ServesHttpService, private router: Router) {}

  ngOnInit(): void {
    this.service.getThoiSu().subscribe((data) => {
      this.dataNews = data;
    });
  }
  onSelect(item: any) {
    this.router.navigate(["/thoi-su", item.title]);
  }
  // search
  isShow = true;
  public term;
  keyWord() {
    if (this.term == "") {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
}
