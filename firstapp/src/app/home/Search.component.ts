import {Component,OnInit} from '@angular/core';
import {ICity} from './location.model';
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
    }
}