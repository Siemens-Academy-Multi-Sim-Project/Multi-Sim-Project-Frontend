import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageProfileTableComponent } from './usage-profile-table.component';

describe('UsageProfileTableComponent', () => {
  let component: UsageProfileTableComponent;
  let fixture: ComponentFixture<UsageProfileTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageProfileTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsageProfileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
