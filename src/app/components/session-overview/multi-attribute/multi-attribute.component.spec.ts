import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAttributeComponent } from './multi-attribute.component';

describe('MultiAttributeComponent', () => {
  let component: MultiAttributeComponent;
  let fixture: ComponentFixture<MultiAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
