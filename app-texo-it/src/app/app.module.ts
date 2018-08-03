import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';

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
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
