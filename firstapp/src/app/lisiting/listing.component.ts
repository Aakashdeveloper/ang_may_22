import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListingService} from '../services/listing.service';
import {IRest} from '../home/rest.model';

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
    mealId: number = 1;
    restaurants: IRest[] = [];
    userInput: string = '';
    filterText: string = "Cuisine Filter"

    constructor(private route:ActivatedRoute,
        private listingService: ListingService) {}

    ngOnInit(){
        this.mealId = Number(this.route.snapshot.params['id'])
        sessionStorage.setItem('mealId', this.route.snapshot.params['id']);
        this.listingService.getRwrtM(this.mealId)
        .subscribe((data:IRest[]) => {
            this.restaurants = data
        })
    }

    dataReceive(cuisineId:string){
        console.log("cusineId>>>>",cuisineId)
    }

}