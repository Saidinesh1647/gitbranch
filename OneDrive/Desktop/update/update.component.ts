import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  itemName: string = '';
  itemDescription: string = '';

  @Output() itemUpdated: EventEmitter<{ name: string, description: string }> = new EventEmitter();

  updateItem(): void {
    if (this.itemName.trim() && this.itemDescription.trim()) {
      this.itemUpdated.emit({ name: this.itemName.trim(), description: this.itemDescription.trim() });
    }
  }
}
