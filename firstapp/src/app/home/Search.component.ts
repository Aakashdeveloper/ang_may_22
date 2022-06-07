import {Component,OnInit} from '@angular/core';
import {ICity} from './location.model';
import {IRest} from './rest.model';
import {HomeService} from '../services/home.service';

@Component({
    selector: 'app-search',
    templateUrl: './Search.component.html',
    styleUrls: ['./Search.component.css']
})

export class SearchComponent implements OnInit {
    title: String = 'Find Best Place Near You'
    keyWord: String = 'Test Date'
    textNumber : Number = 1
    locationData: ICity[] = [];
    restaurants: IRest[] = [];
    userText: String = 'User Text Here'

    constructor(private homeService:HomeService){
      console.log("I am in constructor")
    }

    ngOnInit(): void {
        console.log("I am in ngOnInit")
        this.homeService.getCity()
          .subscribe((data:ICity[]) => this.locationData = data)
    }


    handleCity(event:Event){
      console.log((event.target as HTMLInputElement).value)
      let stateId = Number((event.target as HTMLInputElement).value)
      this.homeService.getRestaurants(stateId)
        .subscribe((data:IRest[]) => this.restaurants = data)
    }
}