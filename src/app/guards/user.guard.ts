import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    public wsService: WebsocketService,
    private router: Router

  ){}

  canActivate(){
    if ( this.wsService.getUser() ) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
