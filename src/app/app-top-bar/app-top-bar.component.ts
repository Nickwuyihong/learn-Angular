import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.scss'],
})

export class AppTopBarComponent implements OnInit {
  public title: string;
  public user: any = {};

  constructor(private route: ActivatedRoute, private router: Router){
    this.title = 'puripuri';
    this.user.name = 'login';
  }

  ngOnInit(): void {
    console.log(this.route);
  }

  onclick(): void {
    // history.back();
    this.router.navigate(['/login']);
  }
}