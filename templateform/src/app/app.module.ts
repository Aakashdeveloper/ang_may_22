import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormService } from './forms/form.service';
import { AftersubmitComponent } from './aftersubmit/aftersubmit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    AftersubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
