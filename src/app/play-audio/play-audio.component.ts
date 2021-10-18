import { Component, OnInit } from "@angular/core";
import { Audio } from "../app-product-list/app-product-list.component";
declare let Swiper: any;

@Component({
  selector: 'play-audio',
  styleUrls: ['./play-audio.component.scss'],
  templateUrl: './play-audio.component.html'
})

export class PlayAudioComponent implements OnInit {
  private audioList: Audio[];
  private swiper: any;
  public curIdx: number;

  constructor(){
    this.swiper = {};
    this.curIdx = 0;
    this.audioList = [
      {
        id: 114,
        title: '前面',
        up: '嘉然今天吃什么',
        playTimes: 1919810,
        time: 114514,
        comments: 114,
        img: '../../assets/image/jiaran.jpg',
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
        img: '../../assets/image/jiaran.jpg'
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

  getAudioList(): Audio[] {
    return this.audioList;
  }

  ngOnInit(){
    this.swiper = new Swiper('.swiper-container', {
      // install Grid module if you use core version of Swiper
      spaceBetween: 100,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
    });
    this.swiper.on('slideChange', (e: any) => {
      console.log('slide changed', e)
      this.curIdx = e.activeIndex;
    })
  }


  onChange(event: any) {
    console.log('object', event)
  }

  changeSwiper(idx: number) {
    console.log(idx);
    this.curIdx = idx;
    this.swiper.slideTo(idx);
  }
}