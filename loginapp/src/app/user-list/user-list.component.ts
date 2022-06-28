import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:any[] = []

  constructor(
    private users: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users.empList()
    .subscribe((res:any[]) => this.userList = res)
  }

  logoutUser():void{
    localStorage.removeItem('Token_Number');
    localStorage.removeItem('Role_Type');
    this.router.navigate(['/login'])
  }

}
