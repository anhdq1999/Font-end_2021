import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-xe',
  templateUrl: './xe.component.html',
  styleUrls: ['./xe.component.scss']
})
export class XeComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService, private router :Router ) { }

  ngOnInit(): void {
    this.service.getXe().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/xe',item.title])
  }
}
