import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDetailsModal } from './day-details-modal';

describe('DayDetailsModal', () => {
  let component: DayDetailsModal;
  let fixture: ComponentFixture<DayDetailsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayDetailsModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayDetailsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
