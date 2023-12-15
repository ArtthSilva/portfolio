import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPerfilComponent } from './button-perfil.component';

describe('ButtonPerfilComponent', () => {
  let component: ButtonPerfilComponent;
  let fixture: ComponentFixture<ButtonPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPerfilComponent]
    });
    fixture = TestBed.createComponent(ButtonPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
