import { Component } from '@angular/core';
import { ILogin, LoginRes, UserRes} from './login.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService }  from '../services/loginform.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent{

  loginError:string = ''

  constructor(private router:Router,
              private loginService: LoginService) { }

  loginForm = new ILogin('lavish@gmail.com','12345678')

  submitLogin(Form:NgForm):void{
      this.loginService.loginEmp(Form.value)
        .subscribe(
          (res:LoginRes) => {
            this.loginError = ''
            this.loginService.getUserInfo(res['token'])
            .subscribe((response:UserRes) => (this.validDateUser(
              response['role'],response['name'],response['email'],response['phone'])))
          },
          (err:any[])=>{
            console.log(err)
            this.loginError = "Please Enter Correct Details"
          }
        )
  }

  validDateUser(role:string,name:string,email:string,phone:string):void{
    let userResponse = `${role},${name},${email},${phone}`;
    sessionStorage.setItem('userResponse', userResponse)
    this.router.navigate(['/'])
    window.location.reload()
  }

}
