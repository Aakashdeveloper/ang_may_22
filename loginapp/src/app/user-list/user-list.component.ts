import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:any[] = []

  constructor(
    private users: UserService
  ) { }

  ngOnInit(): void {
    this.users.empList()
    .subscribe((res:any[]) => this.userList = res)
  }

}
