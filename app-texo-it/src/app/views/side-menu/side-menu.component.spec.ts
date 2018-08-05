import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { SideMenuComponent } from './side-menu.component';
import { SplitButtonModule } from 'primeng/splitbutton';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MenuModule,
        SplitButtonModule,
        HttpClientModule
        ],
      declarations: [ SideMenuComponent ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
