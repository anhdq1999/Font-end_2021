import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-the-thao',
  templateUrl: './the-thao.component.html',
  styleUrls: ['./the-thao.component.scss']
})
export class TheThaoComponent implements OnInit {

  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getKinhDoanh().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/the-thao',item.title])
  }

}
