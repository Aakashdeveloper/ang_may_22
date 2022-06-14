import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRest} from '../home/rest.model';

@Injectable()

export class ListingService{
    private restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";
    private filterUrl = "https://zomatoajulypi.herokuapp.com/filter"

    //https://zomatoajulypi.herokuapp.com/filter/1?hcost=1000&lcost=500

    constructor(private http:HttpClient){}

    getRwrtM(mealId:Number): Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.restUrl}${mealId}`)
    }

    getCuisineData(cuisineId:string):Observable<IRest[]>{
        let mealId = sessionStorage.getItem('mealId');
        let url = `${this.filterUrl}/${mealId}?cuisine=${cuisineId}`;
        return this.http.get<IRest[]>(url)
    }

    getCostData(lcost:Number,hcost:Number):Observable<IRest[]>{
        let mealId = sessionStorage.getItem('mealId');
        let url = `${this.filterUrl}/${mealId}?hcost=${hcost}&lcost=${lcost}`;
        return this.http.get<IRest[]>(url)
    }

}

