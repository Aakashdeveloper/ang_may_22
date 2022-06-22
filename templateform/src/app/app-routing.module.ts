import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { AftersubmitComponent } from './aftersubmit/aftersubmit.component';

const routes: Routes = [
  {path:'after',component: AftersubmitComponent},
  {path:'home',component: FormsComponent},
  {path:'',component: FormsComponent},
 // {path:'*',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
