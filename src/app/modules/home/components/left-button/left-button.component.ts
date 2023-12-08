import { Output } from '@angular/core';
import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-left-button',
  templateUrl: './left-button.component.html',
  styleUrls: ['./left-button.component.scss']
})
export class LeftButtonComponent {

  @Input()
  descricao = '';

  @Input()
  selected = false;

  @Output()
  click = new EventEmitter<void>();

  onClick(){
    this.click.emit();
  }

}
