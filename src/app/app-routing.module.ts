import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './MyComponents/appointments/appointments.component';
import { EmergencyComponent } from './MyComponents/emergency/emergency.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { SettingsComponent } from './MyComponents/settings/settings.component';
import { UsermainComponent } from './MyComponents/usermain/usermain.component';

const routes: Routes = [
  {path : 'h' , component : HomeComponent , children : [
    {path : '' , component : UsermainComponent},
    {path : 'appointments' , component: AppointmentsComponent},
    {path : 'emergency' , component:EmergencyComponent}
  ]},
  {path : 'settings' , component : SettingsComponent},
  {path : '' , redirectTo : '/h' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
