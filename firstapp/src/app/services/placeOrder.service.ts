import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()

export class OrderService {

    private OrderUrl = "http://localhost:8900/orders";

    constructor(private http: HttpClient) {}

    postOrder(orders:any[]): Observable<any[]>{
        return this.http.post<any[]>(this.OrderUrl,orders)
    }

    getOrders(email:string): Observable<any[]>{
        return this.http.get<any[]>(`${this.OrderUrl}?email=${email}`)
    }

    updateOrder(id:Number,status:string,date:string,bank:string): Observable<any[]>{
        let data={
            status,
            date,
            bank
        }
        return this.http.patch<any[]>(`${this.OrderUrl}/${id}`,data)
    }
}