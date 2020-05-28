import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public menuService: MenuService) {}
  
  ionViewWillEnter() {
    this.menuService.enable('tab1-menu');
    this.menuService.disable('tab2-menu');
    this.menuService.disable('tab3-menu');
  }

}
