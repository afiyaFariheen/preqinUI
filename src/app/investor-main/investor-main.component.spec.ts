import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorMainComponent } from './investor-main.component';

describe('InvestorMainComponent', () => {
  let component: InvestorMainComponent;
  let fixture: ComponentFixture<InvestorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
