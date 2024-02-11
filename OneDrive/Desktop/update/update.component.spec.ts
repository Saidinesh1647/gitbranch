import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
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
