import { NgModule} from '@angular/core';
import { HomeService } from '../services/home.service';
import { QuickSearchComponent } from './QuickSearch.component';
import { SearchComponent } from './Search.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './Home.component';

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        QuickSearchComponent,
    ],
    imports: [
        SharedModule
    ],
    providers:[
        HomeService,
    ]
})

export class HomeModule {}