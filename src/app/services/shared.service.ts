import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public expandedSidebar:boolean = false;

  constructor() { }

  toggleSidebar(){
    this.expandedSidebar = !this.expandedSidebar;
  }
}
