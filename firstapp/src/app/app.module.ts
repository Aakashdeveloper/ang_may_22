import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headers/header.component';
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/Home.component';
import { SearchComponent } from './home/Search.component';
import { QuickSearchComponent } from './home/QuickSearch.component';
import { HomeService } from './services/home.service';
import { MyUpperPipe } from './pipes/myupper.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ListingComponent } from './lisiting/listing.component';

//decorator
@NgModule({
    // ALl the components & pipe 
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        QuickSearchComponent,
        MyUpperPipe,
        ListingComponent
    ],
    // all the modules
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    // All services
    providers: [
        HomeService
    ],
    // only and only main components
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}