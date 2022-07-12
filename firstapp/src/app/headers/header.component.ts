import {Component} from '@angular/core';
import { LoginService } from '../services/loginform.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRes } from '../loginform/login.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{
    constructor(private loginService: LoginService,
        private router: Router,
        private route:ActivatedRoute) { }

    token:string|null = ''
    code:string|null = ''
    userInfo: UserRes = {
        "_id": "",
        "name": "",
        "email": "",
        "password":"",
        "phone": "",
        "role": "",
        "__v": 0
    }
    uname:string = '';
    uImage:string = '';
    gitStatus:string = 'noLogin'
    loginStatus:boolean = false

    ngOnInit(): void {
        this.code = sessionStorage.getItem('code')
        console.log(">>>code",sessionStorage.getItem('code'))
        if(this.code){
            let requestedData={
                code:this.code
            }
            this.loginService.getGitProfile(requestedData)
                .subscribe(
                    (res:any) => {
                        this.uname = res.login;
                        this.uImage = res.avatar_url;
                        this.gitStatus = 'Login'
                    })


        }else{
            this.token = sessionStorage.getItem('Token_Number')
            this.loginService.getUserInfo(this.token?this.token:'')
            .subscribe((res:UserRes) => {
                this.userInfo = res;
                this.loginStatus = true
            })
        }
       
    }

    logoutUser():void{
        sessionStorage.removeItem('Token_Number');
        sessionStorage.removeItem('Role_Type');
       // this.gitStatus = false;
        this.loginStatus = false;
        this.router.navigate(['/']);
        window.location.reload()
    }
}