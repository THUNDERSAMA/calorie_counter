import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-welcome-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome-modal.html',
  styleUrls: ['../../../../../dist/output.scss', './welcome-modal.scss']
})
export class WelcomeModal {
height = 0;
  weight = 0;
  age = 0;
  gender = '';

  @Output() submitted = new EventEmitter<any>();

  submitForm() {
    if (this.height && this.weight && this.age && this.gender) {
      let bmr = this.gender === 'male'
        ? 10 * this.weight + 6.25 * this.height - 5 * this.age + 5
        : 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;

      const maintenanceCalories = Math.round(bmr * 1.2);
      const profile = { height: this.height, weight: this.weight, age: this.age, gender: this.gender, maintenanceCalories };
      this.submitted.emit(profile);
    }
  }
}
