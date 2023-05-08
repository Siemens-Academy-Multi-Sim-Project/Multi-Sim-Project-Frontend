import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilingDataListComponent } from './profiling-data-list.component';

describe('ProfilingDataListComponent', () => {
  let component: ProfilingDataListComponent;
  let fixture: ComponentFixture<ProfilingDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilingDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilingDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
