import { Component, Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import * as X2JS from "x2js";

@Component({
  selector: 'my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})

@Injectable()
export class MyComponent implements OnInit{
  sid = '7CD677EC01A6734C83AB7FED17F8FE0C';

  constructor(private _http: HttpClient){ }

  ngOnInit(): void {

  }

  play(){
    
  }

  /**
   * xml返回请求
   */
  updateContent(){
    const url = 'https://we.wdxuexi.com/javaxieyi/api.do?no=2010&ver=590&flag=discover&timestamp=1631265071030&lang=zh-Hans'
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `sid ${this.sid}`);
    const options = {
      headers,
      observe: 'response' as const,
      responseType: 'text' as const
    }
    
    let response = this._http.get(url, options);
    console.log(url)
    response.subscribe(res => {
      console.log(res.body);
      let jss = res.body && new X2JS().xml2js(res.body);
      console.log(jss);
    })
  }

  ddd(){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `sid ${this.sid}`);
    const options = {
      headers,
      observe: 'response' as const,
      responseType: 'text' as const
    }
    const req = new HttpRequest('GET', 'https://we.wdxuexi.com/javaxieyi/api.do?no=2010&ver=590&flag=discover&timestamp=1631265071030&lang=zh-Hans', options)
    this._http.request(req).subscribe(res => {
      console.log('object', res);
    })
  }

  /**
   * json返回请求
   */
  jsonBackReq(){
    const url = "https://we.wdxuexi.com/javaxieyi/example/items"
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `sid ${this.sid}`);
    const options = {
      headers,
      observe: 'response' as const,
      responseType: 'text' as const
    }
    let rsp = this._http.get(url, options);
    rsp.subscribe(res =>{
      console.log(JSON.parse(res.body || '{nmsl: 0}'));
    })
  }
}