import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HierDepService } from '../../../hier-dep.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush, //Angular only checks the component's bindings if the component’s input properties are changed
  // When there is a large application with a large number of input changes OnPush is recomended
  providers: [HierDepService], // Providing HierDepService at the component level to create a new instance for this component and its children
})
export class ChildComponent {
  @Input() data: any;
  childData = 'Initial Child Data';

  constructor(public hierdepService: HierDepService) {}

  updateChildData(): void {
    this.childData = 'Updated Child Data';
  }

  updateServiceMessage(): void {
    this.hierdepService.setMessage('Message updated by Child Component');
  }
}
