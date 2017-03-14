/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GeoprognosisComponent } from './geoprognosis.component';

describe('GeoprognosisComponent', () => {
  let component: GeoprognosisComponent;
  let fixture: ComponentFixture<GeoprognosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoprognosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoprognosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
