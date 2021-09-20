import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-bat-dong-san',
  templateUrl: './bat-dong-san.component.html',
  styleUrls: ['./bat-dong-san.component.scss']
})
export class BatDongSanComponent implements OnInit {
  public dataNews : NewsRss;
  
  constructor(private service : ServesHttpService, private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getBatDongSan().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/bat-dong-san',item.title])
  }

  isShow = true;
  public term;
  
  keyWord() {
    if (this.term ==''){
      this.isShow= true;
    }else{
      this.isShow = false
    }
   
  }

}
