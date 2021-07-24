import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public router:Router) { }

  logoff(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }
}
