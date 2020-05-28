import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public menuService: MenuService) {}
  
  ionViewWillEnter() {
    this.menuService.enable('tab2-menu');
    this.menuService.disable('tab1-menu');
    this.menuService.disable('tab3-menu');
  }

}
