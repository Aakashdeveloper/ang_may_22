import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './headers/header.component';
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/Home.component';
import { SearchComponent } from './home/Search.component';
import { QuickSearchComponent } from './home/QuickSearch.component';

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
        BrowserModule
    ],
    // All services
    providers: [],
    // only and only main components
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}