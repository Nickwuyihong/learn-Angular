import { Component, OnInit } from "@angular/core";
import { Audio } from "../app-product-list/app-product-list.component";
declare let Swiper: any;

export interface comment {
  userName: string,
  userImg: string,
  time: string,
  content: string,
  like: number,
  reply?: comment[]
}

@Component({
  selector: 'play-audio',
  styleUrls: ['./play-audio.component.scss'],
  templateUrl: './play-audio.component.html'
})

export class PlayAudioComponent implements OnInit {
  private audioList: Audio[];
  private swiper: any;
  public curIdx: number;
  public commentList: comment[];
  public isDetail: boolean;

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
    this.commentList = [
      {
        userName: '嘉然今天挂了么',
        userImg: '../../assets/image/jiaran.jpg',
        time: '4-6',
        content: '柠檬什么时候酸\n该用什么创死你好😊',
        like: 114,
        reply: [
          {
            userName: '嘉然令天吃什么0',
            userImg: '../../assets/image/jiaran.jpg',
            time: '4-10',
            content: '你再想想🤬',
            like: 114
          },
          {
            userName: '嘉然令天吃什么1',
            userImg: '../../assets/image/jiaran.jpg',
            time: '5-6',
            content: '你再想想🤬',
            like: 123
          },
          {
            userName: '嘉然令天吃什么2',
            userImg: '../../assets/image/jiaran.jpg',
            time: '6-6',
            content: '你再想想🤬',
            like: 514
          },
          {
            userName: '嘉然令天吃什么3',
            userImg: '../../assets/image/jiaran.jpg',
            time: '7-6',
            content: '你再想想🤬',
            like: 523
          },
          {
            userName: '嘉然令天吃什么4',
            userImg: '../../assets/image/jiaran.jpg',
            time: '8-6',
            content: '你再想想🤬',
            like: 634
          },
          {
            userName: '嘉然令天吃什么5',
            userImg: '../../assets/image/jiaran.jpg',
            time: '9-6',
            content: '你再想想🤬',
            like: 810
          }
        ]
      },
      {
        userName: '福睿控',
        userImg: '../../assets/image/QQ图片20210927171929.jpg',
        time: '4-6',
        content: '鼠鼠我啊，可是要生气了🤬',
        like: 342,
        reply: [
          {
            userName: '时雨哥',
            userImg: '../../assets/image/QQ图片20210927171937.jpg',
            time: '4-12',
            content: '你号没了',
            like: 436
          },
          {
            userName: '太阳哥',
            userImg: '../../assets/image/QQ图片20210927171946.jpg',
            time: '6-7',
            content: '下个号见哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
            like: 86
          }
        ]
      },
      {
        userName: 'leria',
        userImg: '../../assets/image/QQ图片20210927172017.png',
        time: '4-16',
        content: 'nick在哪呢',
        like: 786,
        reply: [
          {
            userName: 'nick',
            userImg: '../../assets/image/QQ图片20210927172009.jpg',
            time: '4-16',
            content: '我在这啊广土',
            like: 1223
          }
        ]
      }
    ]
    this.isDetail = false;
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
    this.isDetail = !this.isDetail;
  }

  changeSwiper(idx: number) {
    console.log(idx);
    this.curIdx = idx;
    this.swiper.slideTo(idx);
  }
}