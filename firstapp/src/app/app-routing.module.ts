import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/Home.component';
import {ListingComponent} from './lisiting/listing.component';
import {DetailsComponent} from './details/details.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

const routes: Routes = [
    {path:'viewBooking', component:ViewBookingComponent},
    {path:'order/:restName',component: PlaceorderComponent},
    {path:'login',component: LoginformComponent},
    {path:'register',component: RegisterformComponent},
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