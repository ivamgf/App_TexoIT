import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent implements OnInit {
  private items: MenuItem[];
  private items_popup: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [{
            label: 'Register',
            items: [
                {label: 'Home', icon: 'fa fa-plus', routerLink: ['/']},
                {label: 'New', icon: 'fa fa-plus', routerLink: ['/form']},
                {label: 'List', icon: 'fa fa-download', routerLink: ['/list']}
            ]
        }];
    this.items_popup = [
      { label: 'Register' },
      { label: 'Home', icon: 'fa fa-plus', routerLink: ['/'] },
      { label: 'New', icon: 'fa fa-plus', routerLink: ['/form'] },
      { label: 'List', icon: 'fa fa-download', routerLink: ['/list'] }
    }];    
  }

}
