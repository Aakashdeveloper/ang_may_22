import {NgModule} from '@angular/core';
import { ListingComponent } from './listing.component';
import { RestSearchPipe } from '../pipes/search.pipe';
import { CostFilter } from '../filters/costFilter.component';
import { CuisineFilter } from '../filters/cuisineFilter.component';
import { ListingService } from '../services/listing.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ListingComponent,
        RestSearchPipe,
        CuisineFilter,
        CostFilter
    ],
    imports: [
        SharedModule
    ],
    providers:[
        ListingService
    ]
})

export class ListingModule {}