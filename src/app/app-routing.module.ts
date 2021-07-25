import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
// import { UserGuard } from './guards/user.guard';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { PagesRoutingModule } from './pages/pages.routing';
// import { UsuarioGuard } from './guards/usuario-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full' },
 
  { path: '**', component: NopagefoundComponent }
];


@NgModule({
  imports: [ 
    RouterModule.forRoot( appRoutes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
