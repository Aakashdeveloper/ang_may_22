import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component'

//decorator
@NgModule({
    // ALl the components & pipe 
    declarations: [
        AppComponent
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