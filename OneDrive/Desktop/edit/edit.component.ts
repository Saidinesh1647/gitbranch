import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  itemName: string = '';
  itemDescription: string = '';

  @Output() itemUpdated: EventEmitter<{ name: string, description: string }> = new EventEmitter();

  updateItem(): void {
    if (this.itemName.trim() && this.itemDescription.trim()) {
      this.itemUpdated.emit({ name: this.itemName.trim(), description: this.itemDescription.trim() });
    }
  }
}
