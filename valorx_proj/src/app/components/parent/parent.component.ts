import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HierDepService } from '../../../hier-dep.service';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  changeDetection: ChangeDetectionStrategy.Default, // Using Angular's default change detection strategy
  //Angular's default change detection strategy runs every time any event occurs in the application, regardless of whether the component's data has changed
  // When we have a very small application with less data updates this is used
  providers: [HierDepService], // Providing HierDepService at the component level to create a new instance for this component and its children
})
export class ParentComponent {
  public primitiveData: number = 10; // Primitive data property initialized with a number
  public nonPrimitiveData = { value: 20 }; // Non-primitive data property initialized with an object

  constructor(public hierdepService: HierDepService) {}

  // Method to update primitiveData with a random number
  updatePrimitiveData(): void {
    this.primitiveData = Math.random();
  }

  // Method to update nonPrimitiveData with a new object containing a random value
  updateNonPrimitiveData(): void {
    this.nonPrimitiveData = { value: Math.random() };
  }

  // Method to update the message in the injected service
  updateServiceMessage(): void {
    this.hierdepService.setMessage('Message updated by Parent Component');
  }
}
