import {Component,Input, Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'app-cost-filter',
    templateUrl: './costFilter.component.html'
})

export class CostFilter{
    @Input() filterName: string = '';
    costType: string = '';
    @Output() costClicked: EventEmitter<string> = new EventEmitter<string>();

    onCostSelect(): void{
        this.costClicked.emit(this.costType)
    }
}
