import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit itemAdded event when addItem is called', () => {
    spyOn(component.itemAdded, 'emit');
    component.itemName = 'Test Item';
    component.itemDescription = 'Test Description';
    component.addItem();
    expect(component.itemAdded.emit).toHaveBeenCalledWith({ name: 'Test Item', description: 'Test Description' });
  });

  it('should reset itemName and itemDescription after addItem is called', () => {
    component.itemName = 'Test Item';
    component.itemDescription = 'Test Description';
    component.addItem();
    expect(component.itemName).toEqual('');
    expect(component.itemDescription).toEqual('');
  });
});
