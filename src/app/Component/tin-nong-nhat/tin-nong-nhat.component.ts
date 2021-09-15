import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-tin-nong-nhat',
  templateUrl: './tin-nong-nhat.component.html',
  styleUrls: ['./tin-nong-nhat.component.scss']
})
export class TinNongNhatComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getTinNongNhat().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/tin-nong-nhat',item.title])
  }
  

}
