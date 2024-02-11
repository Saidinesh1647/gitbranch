// delete.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  @Output() confirmed: EventEmitter<void> = new EventEmitter<void>();
  @Output() canceled: EventEmitter<void> = new EventEmitter<void>();

  confirmDelete(): void {
    // Emit an event to notify the parent component that deletion is confirmed
    this.confirmed.emit();
  }

  cancelDelete(): void {
    // Emit an event to notify the parent component that deletion is canceled
    this.canceled.emit();
  }
}
