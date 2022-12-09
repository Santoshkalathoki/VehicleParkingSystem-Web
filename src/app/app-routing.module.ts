import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent,
  // },
  // {
  //   path:'profile',
  //   component:ProfileComponent
  // },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'client-side',
    loadChildren: () =>
      import('./client-side/client-side.module').then(
        (m) => m.ClientSideModule
      ),canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
