import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbiguousLinksComponent } from './ambiguous-links.component';

describe('AmbiguousLinksComponent', () => {
  let component: AmbiguousLinksComponent;
  let fixture: ComponentFixture<AmbiguousLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbiguousLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbiguousLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
