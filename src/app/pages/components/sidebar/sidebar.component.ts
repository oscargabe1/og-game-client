import { Component, OnInit } from '@angular/core';
import { SidebarItem } from '../../../interfaces/sidebar-item';
import { SharedService } from '../../../services/shared.service';
import { SidebarItems } from "./sidebar.items";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public toggled:boolean = false;
  public items:Array<SidebarItem> = SidebarItems;

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
  }

  toggle(){
    this.sharedService.toggleSidebar();

    if (this.sharedService.expandedSidebar) {
      setTimeout(() => {
        this.toggled = true;
        
      }, 1);
    } else{
      this.toggled = false;
    }
  }

}
