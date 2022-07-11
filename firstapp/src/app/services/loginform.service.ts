import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRes, UserRes } from '../loginform/login.model'

@Injectable()

export class LoginService {

    private loginUrl = "https://developerjwt.herokuapp.com/api/auth/login";
    private userUrl = "https://developerjwt.herokuapp.com/api/auth/userinfo";
    private loginGit = "http://localhost:9900/oauth"

    constructor(private http: HttpClient){}

    loginEmp(user:LoginRes): Observable<LoginRes>{
        return this.http.post<LoginRes>(this.loginUrl,user)
    }

    getUserInfo(token:string): Observable<UserRes>{
        sessionStorage.setItem('Token_Number',token);
        return this.http.get<UserRes>(this.userUrl,{headers:{'x-access-token':token}})
    }

    getGitProfile(requestedData:any): Observable<UserRes>{
        return this.http.post<any>(this.loginGit,requestedData)
    }

}