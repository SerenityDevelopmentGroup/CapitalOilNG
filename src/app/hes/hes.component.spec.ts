/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HesComponent } from './hes.component';

describe('HesComponent', () => {
  let component: HesComponent;
  let fixture: ComponentFixture<HesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
