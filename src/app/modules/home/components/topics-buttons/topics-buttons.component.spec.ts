import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsButtonsComponent } from './topics-buttons.component';

describe('TopicsButtonsComponent', () => {
  let component: TopicsButtonsComponent;
  let fixture: ComponentFixture<TopicsButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicsButtonsComponent]
    });
    fixture = TestBed.createComponent(TopicsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
