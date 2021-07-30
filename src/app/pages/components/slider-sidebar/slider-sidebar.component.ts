import { Component, OnInit } from '@angular/core';
import { SidebarItems } from '../../../data/sidebarItems';
import { SidebarItem } from '../../../interfaces/sidebar-item';

@Component({
  selector: 'app-slider-sidebar',
  templateUrl: './slider-sidebar.component.html',
  styleUrls: ['./slider-sidebar.component.css']
})
export class SliderSidebarComponent implements OnInit {

  public toggledMenu:boolean = false;
  public toggleAnimation:boolean = false;
  public items:Array<SidebarItem> = SidebarItems;

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

  displayMenu(){
    this.toggledMenu = true;
    setTimeout(() => {
      this.toggleAnimation = true;
    }, 1);
    document.body.style.overflow = "hidden";
  }

  closeMenu(){
    this.toggledMenu = false;
    setTimeout(() => {
      this.toggleAnimation = false;
    }, 1);
    document.body.style.overflow = "scroll";
  }

}
