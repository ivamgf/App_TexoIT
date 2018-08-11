import { Component, OnInit } from '@angular/core';
import { FormComponent } from './../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
public lista: any[] = [];
public listas: any[];
public i;
public listaItens: any[] = [];
  constructor() { }

  ngOnInit() {
    this.lista = JSON.parse(localStorage.getItem( 'Lista' ));
    // this.listas.push(this.lista);
    console.log(this.lista);
   /* let i;
    for (i = 0; i < this.lista.length; i++) {
    this.listaItens = this.lista[i];
} */
// console.log(this.listaItens);
    
  }
}
