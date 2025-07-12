import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
interface FoodItem {
  name: string;
  calories: number;
}

@Component({
  selector: 'app-day-details-modal',
  imports: [CommonModule],
  templateUrl: './day-details-modal.html',
  styleUrls: ['../../../../../dist/output.scss', './day-details-modal.scss'],
})
export class DayDetailsModal {
  @Input() date: string = '';
  @Input() foods: FoodItem[] = [];
  @Output() closed = new EventEmitter<void>();

  get totalCalories(): number {
    return this.foods.reduce((sum, food) => sum + (food.calories || 0), 0);
  }

  close() {
    this.closed.emit();
  }
}
