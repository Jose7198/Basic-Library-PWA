import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuthorPage } from './new-author.page';

describe('NewAuthorPage', () => {
  let component: NewAuthorPage;
  let fixture: ComponentFixture<NewAuthorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAuthorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAuthorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
