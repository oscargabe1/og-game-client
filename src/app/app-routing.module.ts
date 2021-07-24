import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';

import { LoginComponent } from './pages/login/login.component';
import { MessagesComponent } from './pages/messages/messages.component';
// import { UsuarioGuard } from './guards/usuario-guard.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [UserGuard]
  },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot( appRoutes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
