import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component'
import { RegisterformComponent } from './registerform/registerform.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path:'user',component: UserListComponent},
  {path:'profile',component: ProfileComponent},
  {path:'login',component: LoginformComponent},
  {path:'register',component: RegisterformComponent},
  {path:'',component: RegisterformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
