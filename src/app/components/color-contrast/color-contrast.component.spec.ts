import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorContrastComponent } from './color-contrast.component';

describe('ColorContrastComponent', () => {
  let component: ColorContrastComponent;
  let fixture: ComponentFixture<ColorContrastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorContrastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
