import { Component, OnInit } from '@angular/core';
import { ServesHttpService } from "../../Service/service.service";
import { NewsRss } from "../../Service/news";
import { Router } from '@angular/router';

@Component({
  selector: 'app-kinh-doanh',
  templateUrl: './kinh-doanh.component.html',
  styleUrls: ['./kinh-doanh.component.scss']
})
export class KinhDoanhComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getKinhDoanh().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/kinh-doanh',item.title])
  }
  
}
