import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';

import { PagesComponent } from "./pages.component";


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        // canActivate:[AuthGuard],
        children:[
            {path: '', component: MessagesComponent},
            {path: 'messages', component: MessagesComponent, data:{title: 'Dashboard'}},
            
        ]
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}