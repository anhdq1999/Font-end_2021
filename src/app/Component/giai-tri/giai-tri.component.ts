import { Component, OnInit } from '@angular/core';
import{ ServesHttpService} from '../../Service/service.service'

@Component({
  selector: 'app-giai-tri',
  templateUrl: './giai-tri.component.html',
  styleUrls: ['./giai-tri.component.scss']
})
export class GiaiTriComponent implements OnInit {

  constructor( private service:ServesHttpService) { }
  url = ''
  ngOnInit(): void {
    this.service.getAll(this.url).subscribe((data)=>{
      console.log(data)
    })
  }

}
