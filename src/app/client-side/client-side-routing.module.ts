import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ClientSideComponent } from './client-side.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '', component: ClientSideComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'booking', component: BookingComponent},
      {path: 'view', component: ViewComponent},
      {path: 'profile', component: ProfileComponent}

    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
