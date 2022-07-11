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

    ngOnInit(): void {
        this.code = this.route.snapshot.queryParamMap.get('code')
        console.log(">>>code",this.route.snapshot.queryParamMap)
        if(this.code){
            let requestedData={
                code:this.code
            }
            this.loginService.getGitProfile(requestedData)
                .subscribe((res:any) => {console.log(">>>>",res)})


        }else{
            this.token = sessionStorage.getItem('Token_Number')
            this.loginService.getUserInfo(this.token?this.token:'')
            .subscribe((res:UserRes) => this.userInfo = res)
        }
       
    }

    logoutUser():void{
        sessionStorage.removeItem('Token_Number');
        sessionStorage.removeItem('Role_Type');
        this.router.navigate(['/']);
        window.location.reload()
    }
}