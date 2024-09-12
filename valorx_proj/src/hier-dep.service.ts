import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Specifies that this service should be provided at the root level (available globally across the application)
})
export class HierDepService {
  private message = 'Initial Service Message'; // Private variable to hold the service message

  // Getter method to retrieve the current message
  getMessage(): string {
    return this.message;
  }

  // Setter method to update the service message
  setMessage(newMessage: string): void {
    this.message = newMessage;
  }
  constructor() {}
}
