import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstexampleComponent } from './firstexample.component';

describe('FirstexampleComponent', () => {
  let component: FirstexampleComponent;
  let fixture: ComponentFixture<FirstexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
