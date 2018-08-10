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
  public list: any[] = [];
  public lists: any[] = [];
  public key: number;
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
  constructor(
    private messageService: MessageService
    ) { }
  ngOnInit() {
    const now = moment().format('DD/MM/YYYY');
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
      { severity: 'error', summary: 'Mensagem de Erro', detail: 'Item não preenchido, Favor cadastrar novo item!' }
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
      this.list.push(
        this.item,
        this.unidade,
        this.quantidade,
        this.moneyBrl,
        this.valid,
        this.fabr
    );
    this.lists.push(this.list);
    this.list = [];
    localStorage.setItem( 'Item', JSON.stringify(this.lists) );
    this.erroSalvar();
    this.item = '';
    this.unidade = '';
    this.quantidade = null;
    this.moneyBrl = '';
    this.valid = '';
    this.fabr = '';
    this.clearValid(event);
    }
    erroSalvar() {
      if ( !this.item ) {
        this.showErrorItem();
      }
      if ( !this.unidade ) {
        this.showErrorUnidade();
      }
      if ( !this.moneyBrl ) {
        this.showErrorMoney();
      }
      if ( !this.fabr ) {
        this.showErrorFabrNull();
      }
      if ( this.perecivel === true && !this.valid ) {
        this.showErrorValid();
      }
    }
}
