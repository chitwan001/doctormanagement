import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SettingsComponent } from './MyComponents/settings/settings.component';
import { HomeComponent } from './MyComponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
