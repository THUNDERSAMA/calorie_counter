import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodModal } from './add-food-modal';

describe('AddFoodModal', () => {
  let component: AddFoodModal;
  let fixture: ComponentFixture<AddFoodModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFoodModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoodModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
