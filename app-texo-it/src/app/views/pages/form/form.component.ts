import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Money, Currencies } from 'ts-money';
import { MessageService } from 'primeng/api';

Currencies.BRL = {
    symbol: "R$",
    name: "Real",
    symbol_native: "R$",
    decimal_digits: 2,
    rounding: 0,
    code: "BRL",
    name_plural: "Reais"    
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-toast .ui-toast-message {
            color: #ffffff;
            background: #FC466B;
            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);
            background: linear-gradient(to right, #3F5EFB, #FC466B);
        }

        :host ::ng-deep .custom-toast .ui-toast-close-icon {
            color: #ffffff;
        }
    `],
  styleUrls: ['./form.component.sass'],
  providers: [MessageService]
})
export class FormComponent implements OnInit {
  
val1: string;
val2: string;
public valid: any;
public fabr: Date;
public now: any;
public money: number;
public moneyBrl: any;
public dataValid: any;
public perecivel = false;
  constructor( 
    private messageService: MessageService 
    ) { }

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
    if ( this.dataValid < this.now ) {
      return this.showError();
      }     
  } 
  formatMoney() {
    Currencies.BRL = {
    symbol: "R$",
    name: "Brazilian Real",
    symbol_native: "R$",
    decimal_digits: 2,
    rounding: 0,
    code: "BRL",
    name_plural: "Reais"    
}
    this.moneyBrl = 'R$' + '' + Money.fromDecimal(this.moneyBrl, Currencies.BRL);
  }
  showError() {
      this.messageService.add({severity:'error', summary: 'Mensagem de Erro', detail:'Item com Prazo de Validade Vencido! Escolha outra data'});
      this.valid = ''; 
    }
}
