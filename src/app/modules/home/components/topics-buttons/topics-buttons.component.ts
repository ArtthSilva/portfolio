import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topics-buttons',
  templateUrl: './topics-buttons.component.html',
  styleUrls: ['./topics-buttons.component.scss']
})
export class TopicsButtonsComponent {

  @Input()
  descricao = '';
}
