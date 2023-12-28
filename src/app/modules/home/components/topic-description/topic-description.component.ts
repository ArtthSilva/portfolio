import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-description',
  templateUrl: './topic-description.component.html',
  styleUrls: ['./topic-description.component.scss']
})
export class TopicDescriptionComponent {
  @Input()
  topicName = '';
  @Input()
  description = '';

}
