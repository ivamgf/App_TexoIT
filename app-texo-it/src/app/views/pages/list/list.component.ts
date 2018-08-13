import { Component, OnInit } from '@angular/core';
import { FormComponent } from './../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
public lista: any[] = [];
  constructor() { }

  ngOnInit() {
    this.lista = JSON.parse(localStorage.getItem( 'Lista' ));
    for (let a = 0; a < this.lista.length; a++) {
      let i = this.lista[a];
    }
  }
  editaItem() {
    localStorage.setItem( 'Item', JSON.stringify(this.lista[1]) );
  }
}
