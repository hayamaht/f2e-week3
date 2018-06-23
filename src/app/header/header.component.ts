import { Component } from '@angular/core';
import { Location } from '@angular/common';

const MenuItems = [ 'home', 'orders', 'products' ];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuItems = MenuItems;  
  current = 'home';

  constructor(
    private location: Location
  ) { }

  isActive(item: string): boolean {
    let c = this.location.path().substr(1);
    c = c === 'dashboard' ? 'home' : c;
    return item === c;
  }

}
