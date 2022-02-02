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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { ChatbotComponent } from './MyComponents/chatbot/chatbot.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { FirstlyseenComponent } from './MyComponents/firstlyseen/firstlyseen.component';
import { MaininteractionComponent } from './MyComponents/maininteraction/maininteraction.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    HomeComponent,
    UsermainComponent,
    AppointmentsComponent,
    EmergencyComponent,
    LoaderComponent,
    ChatbotComponent,
    SignupComponent,
    FirstlyseenComponent,
    MaininteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : InterceptorService , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
