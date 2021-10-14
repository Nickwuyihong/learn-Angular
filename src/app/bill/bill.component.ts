import { Component, OnInit } from "@angular/core";
import { ProductList } from "../app-product-list/app-product-list.component";

@Component({
  selector: 'bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})

export class BillComponent implements OnInit {
  private list: ProductList[];

  constructor() {
    this.list = [
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 13,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 12,
        name: 'aaaa',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      }
    ]
  }

  getList() {
    return this.list;
  }

  ngOnInit() {

  }

  back(){
    history.back();
  }
}