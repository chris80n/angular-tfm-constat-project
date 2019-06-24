import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAssistanceComponent } from './contact-assistance.component';

describe('ContactAssistanceComponent', () => {
  let component: ContactAssistanceComponent;
  let fixture: ComponentFixture<ContactAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
