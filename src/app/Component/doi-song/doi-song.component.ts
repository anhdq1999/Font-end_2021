import { Component, OnInit } from "@angular/core";
import { ServesHttpService } from "../../Service/service.service";
import { NewsRss } from "../../Service/news";

@Component({
  selector: "app-doi-song",
  templateUrl: "./doi-song.component.html",
  styleUrls: ["./doi-song.component.scss"],
})
export class DoiSongComponent implements OnInit {
  dataNews: NewsRss;
  constructor(private service: ServesHttpService) {}
  url = "";
  ngOnInit(): void {
    this.service.getAll(this.url).subscribe((data) => {
      this.dataNews = data;
      // console.log(this.dataNews)
    });
  }
}
