import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-the-gioi',
  templateUrl: './the-gioi.component.html',
  styleUrls: ['./the-gioi.component.scss']
})
export class TheGioiComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getTheGioi().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/the-gioi',item.title])
  }
}
