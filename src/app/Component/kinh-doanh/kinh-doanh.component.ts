import { Component, OnInit } from '@angular/core';
import { ServesHttpService } from "../../Service/service.service";
import { NewsRss } from "../../Service/news";

@Component({
  selector: 'app-kinh-doanh',
  templateUrl: './kinh-doanh.component.html',
  styleUrls: ['./kinh-doanh.component.scss']
})
export class KinhDoanhComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService  ) { }
  // public url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fthoi-su-chinh-tri.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&order_dir=desc&count=20';
  public url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fkinh-doanh.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&order_dir=desc&count=20';
  ngOnInit(): void {
    this.service.getAll(this.url).subscribe((data)=>{
      this.dataNews = data;
    })
  }
  
}
