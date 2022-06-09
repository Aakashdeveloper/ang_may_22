import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
    mealId: number = 1;

    constructor(private route:ActivatedRoute) {}

    ngOnInit(){
        this.mealId = Number(this.route.snapshot.params['id'])
    }

}