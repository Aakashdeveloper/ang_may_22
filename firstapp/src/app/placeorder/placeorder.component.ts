import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from './placeOrder.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/placeOrder.service'

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {

  constructor(private router: Router, private route: ActivatedRoute,
              private orderService: OrderService) {}
  
  url: string = ''
  id:number = Math.floor(Math.random() * 100000)
  restName:string = this.route.snapshot.params['restName']
  userInfo:string|null = sessionStorage.getItem('userResponse')

  name = this.userInfo?this.userInfo.split(',')[1]:''
  email = this.userInfo?this.userInfo.split(',')[2]:''
  phone = this.userInfo?this.userInfo.split(',')[3]:''

  myOrder = new IOrder(this.name,this.email,'Hno 29',Number(this.phone),760,this.id,this.restName);


  submitForm(Form: NgForm):void{  
    console.log(Form.value)
    this.orderService.postOrder(Form.value)
    .subscribe((res:any[]) => { console.log('Order Places',res)})
    //this.router.navigate(['/viewBooking'])
    this.url = 'http://localhost:4000/paynow?amount='+Form.value.cost+'&orderId='+Form.value.id+'&email='+Form.value.email+'&phone='+Form.value.phone
    console.log(this.url)
  }

}