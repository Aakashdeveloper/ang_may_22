import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,
        Validators, AbstractControl} from '@angular/forms'

function ratingRange(min: Number, max: Number){
    return(out: AbstractControl): {[key: string]: boolean} | null => {
        if(out.value !== undefined && (isNaN(out.value) || out.value < min || out.value > max)){
            return {range: true}
        }else{
            return null;
        }
    }
}

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
            email:['a@a.com',[Validators.required,
                              Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$')]],
            phone:[''],
            Notification:[],
            rating:['3',[Validators.required, ratingRange(1,5)]]
        })
    }

    setNotification(notifyVia: string):void{
        const phoneControl = this.employeeFrom.get('phone');
        if(notifyVia === 'phone'){
            phoneControl.setValidators(Validators.required)
        }else{
            phoneControl.clearValidators()
        }
        phoneControl.updateValueAndValidity()
    }

    submitForm():void{
        console.log(this.employeeFrom.value)
    }
}

