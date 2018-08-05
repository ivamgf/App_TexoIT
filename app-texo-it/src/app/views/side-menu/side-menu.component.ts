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
            label: 'Cadastro',
            items: [
                {label: 'Home', icon: 'fa fa-home', routerLink: ['/']},
                {label: 'Novo', icon: 'fa fa-plus', routerLink: ['/form']},
                {label: 'Listagem', icon: 'fa fa-list-ul', routerLink: ['/list']}
            ]
        }];
    this.items_popup = [
      { label: 'Cadastro' },
      { label: 'Home', icon: 'fa fa-home', routerLink: ['/'] },
      { label: 'Novo', icon: 'fa fa-plus', routerLink: ['/form'] },
      { label: 'Listagem', icon: 'fa fa-list-ul', routerLink: ['/list'] }
      ];
    }
}
