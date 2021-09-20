import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-suc-khoe',
  templateUrl: './suc-khoe.component.html',
  styleUrls: ['./suc-khoe.component.scss']
})
export class SucKhoeComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getSucKhoe().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/suc-khoe',item.title])
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
