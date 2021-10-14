import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class Logger {
  /**
   * 说话函数
   * @param msg 
   */
  public Say(msg = 'aaaa'): void {
    alert(msg);
  }
}
