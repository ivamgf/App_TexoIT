import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import * as moment from 'moment';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Money, Currencies } from 'ts-money';
import { MessageService } from 'primeng/api';

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
  public item: string;
  public lists: any[] = [];
  public lista: any[] = [];
  public unidade: string;
  public quantidade: number;
  public valid: any;
  public fabr: any;
  public now: any;
  public money: number;
  public moneyBrl: any;
  public dataValid: any;
  public dataFabr: any;
  public perecivel = false;
  public options: any;
  public listItem: any;
  public flagDataFabr = false;
  public flagDataValid = false;
  public edit: boolean = false;
  constructor(
    private messageService: MessageService
    ) { }
  ngOnInit() {
    const now = moment().format('DD/MM/YYYY');
    this.listItem = JSON.parse(localStorage.getItem( 'Item' ));
    console.log(this.listItem);
    if (this.listItem) {
      this.item = this.listItem.Item;
      this.unidade = this.listItem.Unidade;
      this.quantidade = this.listItem.Quantidade;
      this.moneyBrl = this.listItem.Preco;
      this.valid = this.listItem.Validade;
      this.fabr = this.listItem.Fabricacao;
      this.flagDataFabr = true;
      this.flagDataValid = true;
      this.perecivel = true;
      this.edit = true;
    };
    if (this.valid) {
      this.options = 1;
    }
  }
  dataValidade(event) {
    this.perecivel = false;
    if ( event.target.autocomplete === 'on' ) {
    this.perecivel = true;
    this.fabr = '';
    }
  }
  clearValid(event) {
    event.target.autocomplete === 'off';
    this.perecivel = false;
    this.options = 2;
  }
  dataVenc() {
    this.dataValid = this.valid.toLocaleDateString();
    this.now = moment().format('DD/MM/YYYY');
    if ( this.dataValid < this.now ) {
      return this.showError();
      }
    }
    dataFabrFunction() {
      this.dataFabr = this.fabr.toLocaleDateString();
      if ( this.dataFabr > this.dataValid ) {
        return this.showErrorFabr();
        }
    }
    showError() {
    this.messageService.add(
      { severity: 'error', summary: 'Mensagem de Erro', detail: 'Item com Prazo de Validade Vencido! Escolha outra data!' }
      );
    this.valid = '';
    }
    showErrorFabr() {
    this.messageService.add(
      { severity: 'error', summary: 'Mensagem de Erro', detail: 'Data de fabricação não pode ser maior que data de validade!' }
      );
    this.fabr = '';
    }
    showErrorItem() {
    this.messageService.add(
      { severity: 'error', summary: 'Mensagem de Erro', detail: 'Item não preenchido, Favor preencher novo item!' }
      );
    }
    showErrorUnidade() {
    this.messageService.add(
      { severity: 'error', summary: 'Mensagem de Erro', detail: 'Unidade não selecionada, Favor selecionar unidade de medida!' }
      );
    }
    showErrorMoney() {
    this.messageService.add(
      { severity: 'error', summary: 'Mensagem de Erro', detail: 'Preço não preenchido, Favor digitar um preço para o item!' }
      );
    }
    showErrorFabrNull() {
      this.messageService.add(
        { severity: 'error', summary: 'Mensagem de Erro', detail: 'Data de Fabricação não preenchida, Favor digitar uma data de fabricação!' }
    );
    }
    showErrorValid() {
      this.messageService.add(
    { severity: 'error', summary: 'Mensagem de Erro', detail: 'Data de Validade não preenchida, Favor digitar uma data de validade!' }
    );
    }
    salvar() {        
    if (this.edit === false) {
      this.lists.push({
      'Item':this.item,
      'Unidade':this.unidade,
      'Quantidade':this.quantidade,
      'Preco':this.moneyBrl,
      'Validade':this.valid,
      'Fabricacao':this.fabr
    });
    this.clearFields();
      localStorage.setItem( 'Lista', JSON.stringify(this.lists) );
      this.clearFields();
      this.clearValid(event);
    }    
    if (this.edit === true) {
      this.lists.push({
      'Item':this.item,
      'Unidade':this.unidade,
      'Quantidade':this.quantidade,
      'Preco':this.moneyBrl,
      'Validade':this.valid,
      'Fabricacao':this.fabr
      });
      localStorage.setItem( 'Lista', JSON.stringify(this.lists[1]) );
    }
    }
    erroItem() {
       if ( !this.item ) {
        this.showErrorItem();
      }      
    }
    erroUnidade() {
      if ( !this.unidade ) {
        this.showErrorUnidade();
      }
    }
    clearFields() {
      this.item = '';
      this.unidade = '';
      this.quantidade = null;
      this.moneyBrl = '';
      this.valid = '';
      this.fabr = '';
    }
}
