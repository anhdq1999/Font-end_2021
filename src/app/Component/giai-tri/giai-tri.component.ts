import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsRss } from 'src/app/Service/news';
import{ ServesHttpService} from '../../Service/service.service'

@Component({
  selector: 'app-giai-tri',
  templateUrl: './giai-tri.component.html',
  styleUrls: ['./giai-tri.component.scss']
})
export class GiaiTriComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService, private router :Router ) { }

  ngOnInit(): void {
    this.service.getGiaiTri().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/giai-tri',item.title])
  }

}
