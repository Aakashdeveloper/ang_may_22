import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headers/header.component';
import { FooterComponent } from './footer/footer.component'
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ListingModule } from './lisiting/listing.module';
import { DetailModule } from './details/details.modules';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { RegisterService } from './services/registerform.service';
import { LoginService } from './services/loginform.service';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { OrderService } from './services/placeOrder.service';
import { ViewBookingComponent } from './view-booking/view-booking.component';
//decorator
@NgModule({
    // ALl the components & pipe 
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RegisterformComponent,
        LoginformComponent,
        PlaceorderComponent,
        ViewBookingComponent,
    ],
    // all the modules
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        HomeModule,
        ListingModule,
        DetailModule
    ],
    // All services
    providers: [
        RegisterService,
        LoginService,
        OrderService
    ],
    // only and only main components
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}