import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactList } from './contact-list.component';

describe('ContactList', () => {
  let component: ContactList;
  let fixture: ComponentFixture<ContactList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
