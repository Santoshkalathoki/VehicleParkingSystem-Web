import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BaseLayoutComponent} from "./base-layout/base-layout.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggle, MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from '../client-side/profile/profile.component';

const BASE_MODULES: Array<any> = [
  NgbModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
];

const MAT_MODULES: Array<any> = [
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatDividerModule,
  MatListModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  
];

const COMPONENTS: Array<any> = [
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  BaseLayoutComponent
];

const ENTRY_COMPONENTS: Array<any> = [];

const PIPES: Array<any> = [];

const DIRECTIVES: Array<any> = [];

@NgModule({
  imports: [CommonModule, ...BASE_MODULES, ...MAT_MODULES, RouterModule],
  exports: [...BASE_MODULES, ...MAT_MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVES],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES, HeaderComponent, SidebarComponent],
  entryComponents: [...ENTRY_COMPONENTS]
})

export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return <ModuleWithProviders<ThemeModule>>{
      ngModule: ThemeModule,
      providers: []
    };
  }

  static forChild(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: []
    };
  }
}
