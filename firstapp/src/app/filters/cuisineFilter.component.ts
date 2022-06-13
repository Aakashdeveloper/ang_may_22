import {Component,Input, Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'app-cuisine-filter',
    templateUrl: './cuisineFilter.component.html'
})

export class CuisineFilter{
    @Input() filterName: string = '';
    cuisineType: string = '';
    @Output() cuisineClicked: EventEmitter<string> = new EventEmitter<string>();

    onCuisineSelect(): void{
        this.cuisineClicked.emit(this.cuisineType)
    }
}









/*
@input parent > child
@Output child > parent (eventEmiiter)
*/