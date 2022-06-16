import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from '../details/details.component';
import { DetailsService } from '../services/details.service';

@NgModule({
    declarations: [
        DetailsComponent
    ],
    imports: [
        SharedModule
    ],
    providers:[
        DetailsService
    ]
})

export class DetailModule {}