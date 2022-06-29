import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component'
import { RegisterformComponent } from './registerform/registerform.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileGaurdService } from './gaurds/profilegaurd.service';
import { UserGaurdServics } from './gaurds/usergaurd.service';


const routes: Routes = [
  {path:'user',canActivate:[UserGaurdServics], component: UserListComponent},
  {path:'profile',canActivate:[ProfileGaurdService],  component: ProfileComponent},
  {path:'login',component: LoginformComponent},
  {path:'register',component: RegisterformComponent},
  {path:'',component: RegisterformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[ProfileGaurdService,UserGaurdServics],
  exports: [RouterModule]
})
export class AppRoutingModule { }
