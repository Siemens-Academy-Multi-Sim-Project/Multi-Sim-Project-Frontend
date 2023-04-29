import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBarChartComponent } from './overview-bar-chart.component';

describe('OverviewBarChartComponent', () => {
  let component: OverviewBarChartComponent;
  let fixture: ComponentFixture<OverviewBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
