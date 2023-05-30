import { Component } from '@angular/core';
import { menuList } from './menu-list';

@Component({
  selector: 'app-sidebar-europa',
  templateUrl: './sidebar-europa.component.html',
  styleUrls: ['./sidebar-europa.component.css']
})
export class SidebarEuropaComponent {

  sideMenu = menuList;
  collapse = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }
}
