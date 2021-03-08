import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationMenuComponent } from './donation-menu.component';

describe('DonationMenuComponent', () => {
  let component: DonationMenuComponent;
  let fixture: ComponentFixture<DonationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
