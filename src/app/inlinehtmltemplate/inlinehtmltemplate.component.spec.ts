import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinehtmltemplateComponent } from './inlinehtmltemplate.component';

describe('InlinehtmltemplateComponent', () => {
  let component: InlinehtmltemplateComponent;
  let fixture: ComponentFixture<InlinehtmltemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlinehtmltemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinehtmltemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
