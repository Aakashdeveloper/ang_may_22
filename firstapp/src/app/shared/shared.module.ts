import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule  } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MyUpperPipe } from '../pipes/myupper.pipe';

@NgModule({
    declarations:[
        MyUpperPipe,
    ],
    imports:[
        AppRoutingModule,
        FormsModule,
        BrowserModule,
        CommonModule
    ],
    exports:[
        AppRoutingModule,
        FormsModule,
        BrowserModule,
        CommonModule,
        MyUpperPipe

    ]
})

export class SharedModule {}