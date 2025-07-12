import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.html',
  styleUrls: ['../../../../dist/output.scss', './summary.scss'],
})
export class Summary implements OnChanges {
  @Input() todayCalories: number = 0;
  @Input() maintenanceCalories: number = 2000;

  progress: number = 0;
  remaining: number = 0;
  todayDate: string = '';

  ngOnChanges(): void {
    this.calculateProgress();
    this.todayDate = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }
  calculateProgress(): void {
    this.remaining = Math.max(0, this.maintenanceCalories - this.todayCalories);
    this.progress = Math.min(
      100,
      (this.todayCalories / this.maintenanceCalories) * 100
    );
  }
}
