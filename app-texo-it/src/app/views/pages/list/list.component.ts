import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
lista: any[];
  constructor() { }

  ngOnInit() {
    this.lista = [
            { item: 'a', unid: 'lt', quant: 51, preco: 'R$ 2,00', perecivel: 'sim', validade: '12/11/2019', fabricacao: '01/02/2009' },
            { item: 'b', unid: 'Kg', quant: 83, preco: 'R$ 5,00', perecivel: 'sim', validade: '15/03/2020', fabricacao: '01/02/2009' },
            { item: 'c', unid: 'unid', quant: 38, preco: 'R$ 3,00', perecivel: 'nao', validade: '04/05/2019', fabricacao: '01/02/2009' }
    ];
        console.log(this.lista);
  }

}
