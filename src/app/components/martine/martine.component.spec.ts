import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartineComponent } from './martine.component';

describe('MartineComponent', () => {
  let component: MartineComponent;
  let fixture: ComponentFixture<MartineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
