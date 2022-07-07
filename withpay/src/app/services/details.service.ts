import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRest} from '../home/rest.model';

@Injectable()

export class DetailsService{
    private detailsUrl = "http://zomatoajulypi.herokuapp.com/details";
  

    constructor(private http:HttpClient){}

    getDetails(restId:Number): Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.detailsUrl}/${restId}`)
    }
}

