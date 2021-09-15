import { Component, OnInit } from "@angular/core";
import { ServesHttpService } from "../../Service/service.service";
import { NewsRss } from "../../Service/news";
import { Router } from "@angular/router";

@Component({
  selector: "app-doi-song",
  templateUrl: "./doi-song.component.html",
  styleUrls: ["./doi-song.component.scss"],
})
export class DoiSongComponent implements OnInit {
  public dataNews : NewsRss;

  constructor(private service : ServesHttpService, private router :Router ) { }

  ngOnInit(): void {
    this.service.getDoiSong().subscribe((data)=>{
      this.dataNews = data;
    })
  }
  onSelect(item : any){
    this.router.navigate(['/doi-song',item.title])
  }
}
