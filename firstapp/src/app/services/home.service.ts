import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICity} from '../home/location.model';
import {IRest} from '../home/rest.model'

@Injectable()

export class HomeService{
    private cityUrl = "https://zomatoajulypi.herokuapp.com/location";
    private restUrl = "https://zomatoajulypi.herokuapp.com/restaurant"

    constructor(private http:HttpClient){}

    getCity(): Observable<ICity[]>{
        return this.http.get<ICity[]>(this.cityUrl)
    }

    getRestaurants(stateId:number):Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.restUrl}?stateId=${stateId}`)
    }
}

