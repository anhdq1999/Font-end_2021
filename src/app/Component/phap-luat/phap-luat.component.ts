import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-phap-luat',
  templateUrl: './phap-luat.component.html',
  styleUrls: ['./phap-luat.component.scss']
})
export class PhapLuatComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getPhapLuat().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/phap-luat',item.title])
  }

}
