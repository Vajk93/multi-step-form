import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndDescComponent } from './title-and-desc.component';

describe('TitleAndDescComponent', () => {
  let component: TitleAndDescComponent;
  let fixture: ComponentFixture<TitleAndDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleAndDescComponent]
    });
    fixture = TestBed.createComponent(TitleAndDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
