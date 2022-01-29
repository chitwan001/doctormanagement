import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SettingsComponent } from './MyComponents/settings/settings.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { UsermainComponent } from './MyComponents/usermain/usermain.component';
import { AppointmentsComponent } from './MyComponents/appointments/appointments.component';
import { EmergencyComponent } from './MyComponents/emergency/emergency.component';
import { LoaderComponent } from './MyComponents/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    HomeComponent,
    UsermainComponent,
    AppointmentsComponent,
    EmergencyComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : InterceptorService , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
