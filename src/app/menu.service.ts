import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus: Map<string, boolean> = new Map();
  constructor() { }
  
  enable(tabId: string) {
    this.menus.set(tabId, true);
  }
  
  disable(tabId: string) {
    this.menus.set(tabId, false);
  }
  
  getState(tabId: string): boolean {
    return this.menus.get(tabId);
  }
}
