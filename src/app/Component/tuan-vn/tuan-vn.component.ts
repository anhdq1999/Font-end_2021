import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-tuan-vn',
  templateUrl: './tuan-vn.component.html',
  styleUrls: ['./tuan-vn.component.scss']
})
export class TuanVnComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getTuanVN().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/tuan-vn',item.title])
  }
    // search
    isShow = true;
    public term;
    keyWord() {
      if (this.term == "") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    
    }
}
