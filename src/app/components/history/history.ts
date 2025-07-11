import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrls: ['../../../../dist/output.scss','./history.scss']
})
export class History {
 @Input() dailyData: any = {};
  @Input() maintenanceCalories: number = 0;
  @Output() viewDay = new EventEmitter<string>();

  get sortedDates(): string[] {
    return Object.keys(this.dailyData).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  }

  emitDay(date: string) {
    this.viewDay.emit(date);
  }
}
