import { Component, OnInit } from '@angular/core';
import { FormComponent } from './../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
public lista;
public listas: any[];
public i;
public listaItens;
  constructor() { }

  ngOnInit() {
    this.lista = localStorage.getItem( 'Lista' );
    // this.listas.push(this.lista);
    for (this.i = 0; this.i < this.lista.length; this.i++) {
     this.listaItens = this.lista[this.i];
    };
    console.log(this.lista);
    console.log(this.listaItens);
    this.listas = [
           // { item: {{item}}, unid: {{unidade}}, quant: {{quantidade}}, preco: {{moneyBrl}}, validade: {{valid}}, fabricacao: {{fabr}} }
    ];
  }
}
