import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLabelsComponent } from './form-labels.component';

describe('FormLabelsComponent', () => {
  let component: FormLabelsComponent;
  let fixture: ComponentFixture<FormLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
