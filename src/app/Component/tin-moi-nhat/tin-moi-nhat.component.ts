import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-tin-moi-nhat',
  templateUrl: './tin-moi-nhat.component.html',
  styleUrls: ['./tin-moi-nhat.component.scss']
})
export class TinMoiNhatComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService ,private router :Router ) { }
  
  ngOnInit(): void {
    this.service.getTinMoiNhat().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/tin-moi-nhat',item.title])
  }

}
