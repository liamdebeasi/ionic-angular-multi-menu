import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public menuService: MenuService) {}
  
  ionViewWillEnter() {
    this.menuService.enable('tab3-menu');
    this.menuService.disable('tab2-menu');
    this.menuService.disable('tab1-menu');
  }

}
