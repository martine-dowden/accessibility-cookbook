import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageAttributeComponent } from './language-attribute.component';

describe('LanguageAttributeComponent', () => {
  let component: LanguageAttributeComponent;
  let fixture: ComponentFixture<LanguageAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
