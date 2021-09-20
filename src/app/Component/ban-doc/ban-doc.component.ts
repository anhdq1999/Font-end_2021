import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-ban-doc',
  templateUrl: './ban-doc.component.html',
  styleUrls: ['./ban-doc.component.scss']
})
export class BanDocComponent implements OnInit {
  public dataNews : NewsRss;
  isShow = true;
  public term;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getBanDoc().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/ban-doc',item.title])
  }
  keyWord() {
    if (this.term ==''){
      this.isShow= true;
    }else{
      this.isShow = false
    }
   
  }

}
