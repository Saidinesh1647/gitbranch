import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let confirmedSpy: jasmine.Spy;
  let canceledSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    confirmedSpy = spyOn(component.confirmed, 'emit').and.callThrough();
    canceledSpy = spyOn(component.canceled, 'emit').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit confirmed event when confirmDelete is called', () => {
    component.confirmDelete();
    expect(confirmedSpy).toHaveBeenCalled();
  });

  it('should emit canceled event when cancelDelete is called', () => {
    component.cancelDelete();
    expect(canceledSpy).toHaveBeenCalled();
  });
});
