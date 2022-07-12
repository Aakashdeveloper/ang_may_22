import {Component, OnInit} from '@angular/core';
import {IMeal} from './quick.model';
import {HomeService} from '../services/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-quicksearch',
    templateUrl: './QuickSearch.component.html',
    styleUrls: ['./QuickSearch.component.css']
})

export class QuickSearchComponent implements OnInit{
    mealType:IMeal[] = [];
    code:string|null = ''
    price: number = 400;
    opened = new Date(2022, 5, 7)

    constructor(private homeService:HomeService,
        private route:ActivatedRoute){}

    ngOnInit():void{
        this.code = this.route.snapshot.queryParamMap.get('code')
        this.code = this.code? this.code :''
        sessionStorage.setItem('code',this.code)
        console.log(">>>code",this.route.snapshot.queryParamMap)
        this.homeService.getMeal()
            .subscribe((data:IMeal[]) => this.mealType = data)
    }
}