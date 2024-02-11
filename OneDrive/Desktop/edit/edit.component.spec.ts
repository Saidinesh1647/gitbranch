import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit itemUpdated event when updateItem is called', () => {
    spyOn(component.itemUpdated, 'emit');
    component.itemName = 'Updated Test Item';
    component.itemDescription = 'Updated Test Description';
    component.updateItem();
    expect(component.itemUpdated.emit).toHaveBeenCalledWith({ name: 'Updated Test Item', description: 'Updated Test Description' });
  });
});
