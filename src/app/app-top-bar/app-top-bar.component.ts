import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.scss'],
})

export class AppTopBarComponent implements OnInit {
  public title: string;

  constructor(private route: ActivatedRoute){
    this.title = 'puripuri';
  }

  ngOnInit(): void {
    console.log(this.route);
  }

  onclick(): void {
    history.back();
  }
}