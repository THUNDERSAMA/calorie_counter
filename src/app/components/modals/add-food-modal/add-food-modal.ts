import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FoodItem {
  name: string;
  calories: number;
}
@Component({
  selector: 'app-add-food-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-food-modal.html',
  styleUrls: ['../../../../../dist/output.scss', './add-food-modal.scss'],
})
export class AddFoodModal {
  @Input() foodDatabase: FoodItem[] = [];
  @Output() foodAdded = new EventEmitter<FoodItem>();
  @Output() closed = new EventEmitter<void>();

  searchQuery = '';
  suggestions: FoodItem[] = [];
  selectedFood: FoodItem | null = null;

  onSearchChange() {
    const q = this.searchQuery.toLowerCase().trim();
    console.log('[Search] Query:', q);
    console.log('[Search] Available items:', this.foodDatabase);

    if (q.length === 0) {
      this.suggestions = [];
      return;
    }

    this.suggestions = this.foodDatabase
      .filter((f) => f.name?.toLowerCase().includes(q))
      .slice(0, 5);

    console.log('[Suggestions]', this.suggestions);
  }

  selectFood(food: FoodItem) {
    this.searchQuery = food.name;
    this.selectedFood = {
      name: food.name,
      calories: food.calories,
    };
    this.suggestions = [];
  }
  submit() {
    if (this.selectedFood) {
      this.foodAdded.emit(this.selectedFood);
      this.reset();
    }
  }

  close() {
    this.closed.emit();
    this.reset();
  }

  reset() {
    this.searchQuery = '';
    this.selectedFood = null;
    this.suggestions = [];
  }
}
