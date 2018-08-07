import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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
public valid: Date;
public fabr: Date;
public now: any;
money: number;
public dataValid: any;
public perecivel = false;
  constructor() { }

  ngOnInit() {
    let now = moment().format('DD/MM/YYYY');
    console.log(now);     
  }
  dataValidade(event) {
    this.perecivel = false;
    if (event.target.autocomplete === 'on') {
      this.perecivel = true;
    }     
  }
  dataVenc() {
    this.dataValid = this.valid.toLocaleDateString();
    this.now = moment().format('DD/MM/YYYY');
    console.log(this.valid.toLocaleDateString());
    console.log(this.now);
    if ( this.dataValid < this.now ) {return console.log('Produto vencido!');}
  } 
}
