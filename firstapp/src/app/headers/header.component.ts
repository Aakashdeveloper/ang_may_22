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
        private router: Router) { }

    token:string|null = ''
    userInfo: UserRes = {
        "_id": "",
        "name": "",
        "email": "",
        "password":"",
        "phone": "",
        "role": "",
        "__v": 0
    }

    ngOnInit(): void {
        this.token = sessionStorage.getItem('Token_Number')
        this.loginService.getUserInfo(this.token?this.token:'')
        .subscribe((res:UserRes) => this.userInfo = res)
    }

    logoutUser():void{
        sessionStorage.removeItem('Token_Number');
        sessionStorage.removeItem('Role_Type');
        this.router.navigate(['/']);
        window.location.reload()
    }
}