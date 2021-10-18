import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import Swiper from "swiper";
declare let Swiper: any;

export interface ProductList {
  id: number;
  name: string;
  img: string;
  route?: string;
}

export interface Audio {
  id: number,
  title: string,
  up: string,
  playTimes: number,
  time: number,
  comments: number,
  img: string
}

@Component({
  selector: 'app-product-list',
  styleUrls: ['./app-product-list.component.scss'],
  templateUrl: './app-product-list.component.html'
})

export class AppProductList implements OnInit {

  private productList: ProductList[];

  private audioList: Audio[];

  constructor(private router: Router) {
    this.productList = [
      {
        id: 114,
        name: '前面',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 514,
        name: 'SVG学习',
        img: 'https://angular.cn/generated/images/guide/start/new-app-all.gif'
      },
      {
        id: 1919,
        name: '我的',
        img: 'https://angular.cn/generated/images/guide/start/template-syntax-product-names.png'
      },
      {
        id: 810,
        name: 'smart brain',
        img: 'https://angular.cn/generated/images/guide/start/template-syntax-product-anchor.png'
      },
      {
        id: 1141,
        name: '前面',
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 5141,
        name: 'SVG学习',
        img: 'https://angular.cn/generated/images/guide/start/new-app-all.gif'
      },
      {
        id: 19191,
        name: '我的',
        img: 'https://angular.cn/generated/images/guide/start/template-syntax-product-names.png'
      },
      {
        id: 8101,
        name: 'smart brain',
        img: 'https://angular.cn/generated/images/guide/start/template-syntax-product-anchor.png'
      }
    ]

    this.audioList = [
      {
        id: 114,
        title: '前面',
        up: '嘉然今天吃什么',
        playTimes: 1919810,
        time: 114514,
        comments: 114,
        img: 'https://angular.cn/generated/images/guide/start/app-components.png',
      },
      {
        id: 514,
        title: 'SVG学习',
        up: '嘉然今天吃什么',
        playTimes: 1919810,
        time: 114514,
        comments: 114,
        img: 'https://angular.cn/generated/images/guide/start/new-app-all.gif'
      },
      {
        id: 1919,
        title: '我的',
        up: '嘉然今天吃什么',
        playTimes: 1919810,
        time: 114514,
        comments: 114,
        img: 'https://angular.cn/generated/images/guide/start/template-syntax-product-names.png'
      },
      {
        id: 810,
        title: 'smart brain',
        up: '嘉然今天吃什么',
        playTimes: 1919810,
        time: 114514,
        comments: 114,
        img: 'https://angular.cn/generated/images/guide/start/template-syntax-product-anchor.png'
      },
      {
        id: 1141,
        title: '前面',
        up: '嘉然今天吃什么',
        playTimes: 1919810,
        time: 114514,
        comments: 114,
        img: 'https://angular.cn/generated/images/guide/start/app-components.png'
      },
      {
        id: 5141,
        title: 'SVG学习',
        up: '嘉然今天吃什么',
        playTimes: 1919810,
        time: 114514,
        comments: 114,
        img: 'https://angular.cn/generated/images/guide/start/new-app-all.gif'
      },
      {
        id: 19191,
        title: '我的',
        up: '嘉然今天吃什么',
        playTimes: 1919810,
        time: 114514,
        comments: 114,
        img: 'https://angular.cn/generated/images/guide/start/template-syntax-product-names.png'
      },
      {
        id: 8101,
        title: 'smart brain',
        up: '嘉然今天吃什么',
        playTimes: 1919810,
        time: 114514,
        comments: 114,
        img: 'https://angular.cn/generated/images/guide/start/template-syntax-product-anchor.png'
      }
    ]
  }

  ngOnInit(): void {
    // Now you can use all slider methods like
    // swiper.slideNext();
    // init Swiper:
    const swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      loop: true,
      spaceBetween: 100,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      }
    });

    swiper.on('slideChange', () => {
      console.log('slide changed')
    })
  }

  getList(): ProductList[] {
    return this.productList;
  }

  getAudioList(): Audio[] {
    return this.audioList;
  }

  goto(){
    this.router.navigate(['/bill']);
  }

  onSwiper(swiper: any){
    console.log(swiper)
  }

  onSlideChange() {
    console.log('slide change')
  }
}