import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from './placeOrder.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {

  constructor(private router: Router,) {}

    myOrder = new IOrder('Amit','a@a.com','Hno 29',9765675653);


    submitForm(Form: NgForm):void{  
    console.log(Form.value)
      // this.registerService.registerEmp(Form.value)
      // .subscribe((res:any[]) => { console.log('User Regsitered',res)})
      this.router.navigate(['/login'])
    }

}


//private registerService: RegisterService