import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualAttributeComponent } from './dual-attribute.component';

describe('DualAttributeComponent', () => {
  let component: DualAttributeComponent;
  let fixture: ComponentFixture<DualAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
