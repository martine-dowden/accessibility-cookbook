import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksAndButtonsComponent } from './links-and-buttons.component';

describe('LinksAndButtonsComponent', () => {
  let component: LinksAndButtonsComponent;
  let fixture: ComponentFixture<LinksAndButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksAndButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksAndButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
