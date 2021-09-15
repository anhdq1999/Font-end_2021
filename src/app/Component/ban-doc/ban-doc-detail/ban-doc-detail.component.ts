import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-ban-doc-detail',
  templateUrl: './ban-doc-detail.component.html',
  styleUrls: ['./ban-doc-detail.component.scss']
})
export class BanDocDetailComponent implements OnInit {

  public dataNews: NewsRss;
  public content: any;
  public id: number;

  constructor(
    private service: ServesHttpService,
    private route: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
    this.service.getBanDoc().subscribe((data) => {
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
