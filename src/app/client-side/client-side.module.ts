import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThemeModule } from '../theme-modules/theme.module';
import { BookingComponent } from './booking/booking.component';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientSideComponent,
    DashboardComponent,
    BookingComponent,
    ViewComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientSideRoutingModule,
    ThemeModule.forChild()
  ]
})
export class ClientSideModule { }
