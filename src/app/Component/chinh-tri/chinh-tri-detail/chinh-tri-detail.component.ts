import { Component, OnInit } from "@angular/core";
import { ServesHttpService } from "../../../Service/service.service";
import { NewsRss } from "../../../Service/news";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-chinh-tri-detail",
  templateUrl: "./chinh-tri-detail.component.html",
  styleUrls: ["./chinh-tri-detail.component.scss"],
})
export class ChinhTriDetailComponent implements OnInit {
  public dataNews: NewsRss;
  public content: any;
  public id: number;

  constructor(
    private service: ServesHttpService,
    private route: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
    this.service.getChinhtri().subscribe((data) => {
      this.dataNews = data;
      this.checkEqual();
    });
  }
  // lấy ra title trên url
  getPara(): string {
    let idString = this.route.snapshot.params.title;
    return (this.content = idString);
  }

  // kiểm tra url vừa lấy với dataNews
  checkEqual() : number {
    let dataItem = this.dataNews.items;
    for (let i = 0; i < dataItem.length; i++) {
      if (dataItem[i].title === this.getPara()) {
       return this.id = i;
      }
    }
  }
}
