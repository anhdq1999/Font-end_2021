import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import { ServesHttpService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-cong-nghe',
  templateUrl: './cong-nghe.component.html',
  styleUrls: ['./cong-nghe.component.scss']
})
export class CongNgheComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService, private router :Router ) { }

  ngOnInit(): void {
    this.service.getCongNghe().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/cong-nghe',item.title])
  }
}
