import { Component } from '@angular/core';
import { IRegister } from './regsiter.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/registerform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {

  constructor(private router: Router,
              private registerService: RegisterService) {}
  
  myEmployee = new IRegister('Amit','a@a.com','12345678',9765675653);


  submitForm(Form: NgForm):void{  
    console.log(Form.value)
    this.registerService.registerEmp(Form.value)
        .subscribe((res:any[]) => { console.log('User Regsitered',res)})
    this.router.navigate(['/login'])
  }

}



