import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4Component } from './step-4.component';

describe('Step4Component', () => {
  let component: Step4Component;
  let fixture: ComponentFixture<Step4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step4Component]
    });
    fixture = TestBed.createComponent(Step4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
