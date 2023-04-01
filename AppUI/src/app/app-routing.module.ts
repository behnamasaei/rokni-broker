import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndustryPageComponent } from './industry-page/industry-page.component';
import { ChoosenComponent } from './Choosen/Choosen.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'industry/:id',
    component: IndustryPageComponent
  },
  {
    path: 'choosen',
    component: ChoosenComponent
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
