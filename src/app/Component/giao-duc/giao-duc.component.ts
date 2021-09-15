import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-giao-duc',
  templateUrl: './giao-duc.component.html',
  styleUrls: ['./giao-duc.component.scss']
})
export class GiaoDucComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getGiaoDuc().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/giao-duc',item.title])
  }

}
