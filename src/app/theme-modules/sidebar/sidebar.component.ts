import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarMenus: Array<any> = new Array<any>(
    {
      name: 'Home',
      icon: 'home',
      url: '/client-side/home',
    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/client-side/dashboard',
    },
    {
      name: 'Booking',
      icon: 'booking',
      url: '/client-side/booking',
    },
    {
      name: 'View',
      icon: 'dashboard',
      url: '/client-side/view',
    },
  );

  constructor() {}

  ngOnInit(): void {}
}
