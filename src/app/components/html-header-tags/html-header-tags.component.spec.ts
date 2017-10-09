import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlHeaderTagsComponent } from './html-header-tags.component';

describe('HtmlHeaderTagsComponent', () => {
  let component: HtmlHeaderTagsComponent;
  let fixture: ComponentFixture<HtmlHeaderTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlHeaderTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlHeaderTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
