import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorGridComponent } from './investor-grid.component';

describe('InvestorGridComponent', () => {
  let component: InvestorGridComponent;
  let fixture: ComponentFixture<InvestorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
