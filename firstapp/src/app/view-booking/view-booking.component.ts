import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/placeOrder.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders:any[]=[]
  userInfo:string|null = sessionStorage.getItem('userResponse')
  email = this.userInfo?this.userInfo.split(',')[2]:''

  ngOnInit(): void {
    this.orderService.getOrders(this.email)
        .subscribe((data:any[]) => {
            this.orders = data
        })
  }

}
