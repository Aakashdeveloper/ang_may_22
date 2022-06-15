import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/Home.component';
import {ListingComponent} from './lisiting/listing.component';
import {DetailsComponent} from './details/details.component'

const routes: Routes = [
    {path:'details',component: DetailsComponent},
    {path:'listing/:id',component: ListingComponent},
    {path:'home',component: HomeComponent},
    {path:'',component: HomeComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers:[],
    exports:[RouterModule]
})

export class AppRoutingModule {}