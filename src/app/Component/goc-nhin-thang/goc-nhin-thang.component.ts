import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-goc-nhin-thang',
  templateUrl: './goc-nhin-thang.component.html',
  styleUrls: ['./goc-nhin-thang.component.scss']
})
export class GocNhinThangComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getGocNhinThang().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/goc-nhin-thang',item.title])
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
