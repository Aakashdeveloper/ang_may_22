import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { EmployeeFormComponent } from './employeeForm/employee.component';


const routes: Routes = [
    {path: 'form', component: EmployeeFormComponent },
    {path: '', redirectTo: 'form', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}


