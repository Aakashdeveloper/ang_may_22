import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,
        Validators, AbstractControl} from '@angular/forms'

@Component({
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeFormComponent implements OnInit {
    employeeFrom: FormGroup;

    constructor(private fb:FormBuilder) {}

    ngOnInit() {
        this.employeeFrom = this.fb.group({
            firstName:['Kevin',[Validators.required,Validators.minLength(3)]],
            lastName:['',[Validators.maxLength(5)]],
            email:['a@a.com',[Validators.required,Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$')]],
        })
    }
}

