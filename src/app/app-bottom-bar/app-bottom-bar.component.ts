import { Component, OnInit } from "@angular/core";
import { ProductList } from "../app-product-list/app-product-list.component";

@Component({
  selector: 'app-bottom-bar',
  styleUrls: ['./app-bottom-bar.component.scss'],
  templateUrl: './app-bottom-bar.component.html'
})

export class AppBottomBarComponent implements OnInit {

  public tabList: ProductList[];
  public curIdx: number;
  
  constructor(){
    this.tabList = [
      {
        id: 114,
        name: '前面',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png',
        route: 'app-product-list'
      },
      {
        id: 514,
        name: 'SVG学习',
        img: 'https://angular.cn/generated/images/guide/start/new-app-all.gif',
        route: 'learn-svg'
      },
      {
        id: 1919,
        name: '我的',
        img: 'https://angular.cn/generated/images/guide/start/template-syntax-product-names.png',
        route: 'my'
      }
    ]
    this.curIdx = this.tabList[0].id;
  }

  ngOnInit(): void {

  }

  onchange(e: any): void {
    this.curIdx = e.target.id;
  }
}