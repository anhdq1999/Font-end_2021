import { Component, OnInit } from '@angular/core';
import { ServesHttpService } from '../../../Service/service.service';
import { NewsRss } from '../../../Service/news';

@Component({
  selector: 'app-chinh-tri-detail',
  templateUrl: './chinh-tri-detail.component.html',
  styleUrls: ['./chinh-tri-detail.component.scss']
})
export class ChinhTriDetailComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService  ) { }
  public url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fthoi-su-chinh-tri.rss';
  ngOnInit(): void {
    this.service.getAll(this.url).subscribe((data)=>{
      this.dataNews = data;
    })
  }
  
  }