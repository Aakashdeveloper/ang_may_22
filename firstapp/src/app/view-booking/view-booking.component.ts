import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/placeOrder.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  constructor(private orderService: OrderService,
    private route:ActivatedRoute,) { }

  orders:any[]=[]
  id:number=0
  status:string|null=''
  date:string|null=''
  bank:string|null=''

  userInfo:string|null = sessionStorage.getItem('userResponse')
  email = this.userInfo?this.userInfo.split(',')[2]:''

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('ORDERID'));
    this.status = this.route.snapshot.queryParamMap.get('status');
    this.status = this.status?this.status:''
    this.date = this.route.snapshot.queryParamMap.get('date')
    this.date = this.date?this.date:''
    this.bank = this.route.snapshot.queryParamMap.get('bank');
    this.bank = this.bank?this.bank:''

    this.orderService.updateOrder(this.id,this.status,this.date,this.bank)
    .subscribe((data:any[]) => {
      console.log('OK')
    })

    this.orderService.getOrders(this.email)
        .subscribe((data:any[]) => {
            this.orders = data
    })
    
  }

}
