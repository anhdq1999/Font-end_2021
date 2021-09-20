import { Component, OnInit } from '@angular/core';
import { ServesHttpService } from '../../Service/service.service';
import { NewsRss } from '../../Service/news';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chinh-tri',
  templateUrl: './chinh-tri.component.html',
  styleUrls: ['./chinh-tri.component.scss']
})
export class ChinhTriComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService, private router :Router ) { }

  ngOnInit(): void {
    this.service.getChinhtri().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/chinh-tri',item.title])
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
