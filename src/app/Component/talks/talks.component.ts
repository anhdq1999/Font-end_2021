import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService, private router :Router ) { }

  ngOnInit(): void {
    this.service.getTalks().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/talks',item.title])
  }
   // search
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
