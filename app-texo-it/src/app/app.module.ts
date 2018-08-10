import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import { SideMenuComponent } from './views/side-menu/side-menu.component';
import { FormComponent } from './views/pages/form/form.component';
import { ListComponent } from './views/pages/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    FormComponent,
    ListComponent
  ],
  exports: [SideMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MenuModule,
    SplitButtonModule,
    InputTextModule,
    FormsModule,
    InputMaskModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    HttpClientModule,
    ToastModule,
    LocalStorageModule.withConfig({
            prefix: 'App-Texo-It',
            storageType: 'localStorage'
        })
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
