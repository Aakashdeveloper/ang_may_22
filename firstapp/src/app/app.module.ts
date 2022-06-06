import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from './headers/header.component';
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/Home.component';
import { SearchComponent } from './home/Search.component';
import { QuickSearchComponent } from './home/QuickSearch.component';
import { HomeService } from './services/home.service';

//decorator
@NgModule({
    // ALl the components & pipe 
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        QuickSearchComponent
    ],
    // all the modules
    imports: [
        BrowserModule,
        HttpClientModule
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