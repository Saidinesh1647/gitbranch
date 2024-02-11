import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  itemName: string = '';
  itemDescription: string = '';

  @Output() itemAdded: EventEmitter<{ name: string, description: string }> = new EventEmitter();

  addItem(): void {
    if (this.itemName.trim() && this.itemDescription.trim()) {
      this.itemAdded.emit({ name: this.itemName.trim(), description: this.itemDescription.trim() });
      this.itemName = ''; // Reset itemName after adding
      this.itemDescription = ''; // Reset itemDescription after adding
    }
  }
}
