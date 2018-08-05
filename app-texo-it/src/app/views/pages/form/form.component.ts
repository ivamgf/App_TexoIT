import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
val1: string;
val2: string;
valid: Date;
fabr: Date;
money: number;
public perecivel = false;
  constructor() { }

  ngOnInit() {}
dataValidade(event) {
    this.perecivel = false;
    if (event.target.autocomplete === 'on') {
      this.perecivel = true;
    }
  }
}
