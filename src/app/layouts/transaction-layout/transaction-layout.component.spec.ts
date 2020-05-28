import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLayoutComponent } from './transaction-layout.component';

describe('TransactionLayoutComponent', () => {
  let component: TransactionLayoutComponent;
  let fixture: ComponentFixture<TransactionLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
