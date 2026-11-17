import { Component } from '@angular/core';
import { SideMenuOptions } from './side-menu-options/side-menu-options';

@Component({
  selector: 'app-side-menu',
  imports: [SideMenuOptions],
  templateUrl: './side-menu.html',
})
export class SideMenu {}
