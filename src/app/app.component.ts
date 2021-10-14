import { Component, OnInit } from '@angular/core';
import { Logger } from './utils/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  msg = 'fuxk your pussy!';
  msg2 = '我的';

  private canEdit: boolean;

  constructor(private logger: Logger){
    this.canEdit = false;
  }

  ngOnInit(): void {
    
  }

  onclick():void {
    this.canEdit = !this.canEdit;
    this.msg2 = this.canEdit ? '我的' : 'SVG学习';
    this.logger.Say(this.msg2);
  }
}
