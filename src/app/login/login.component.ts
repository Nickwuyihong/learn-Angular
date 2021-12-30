import { Component } from "@angular/core";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  /**是否注册 */
  public isSignin: boolean = false;

  /**账号 */
  public account: string = '';

  /**密码 */
  public password: string = '';

  name: string = '';

  setValue() {
    this.name = 'Nancy';
  }

  public user = {
    account: '',
    password: ''
  }

  constructor(){
    
  }

  handler() {
    console.log("this.account", this.account);
    console.log('this.password', this.password);
    /**注册逻辑 */
    if (this.isSignin) {
      
    } else {
      /**登陆逻辑 */

    }
  }
}