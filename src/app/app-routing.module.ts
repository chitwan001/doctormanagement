import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { SettingsComponent } from './MyComponents/settings/settings.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'settings' , component : SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
