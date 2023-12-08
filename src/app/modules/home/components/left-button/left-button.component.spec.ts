import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftButtonComponent } from './left-button.component';

describe('LeftButtonComponent', () => {
  let component: LeftButtonComponent;
  let fixture: ComponentFixture<LeftButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftButtonComponent]
    });
    fixture = TestBed.createComponent(LeftButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
