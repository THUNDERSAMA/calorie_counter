import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalorieTracker {
  getProfile() {
    const cookie = this.getCookie('calorieTracker_profile');
    return cookie ? JSON.parse(cookie) : null;
  }

  getTodayCalories(): number {
    const data = this.getDailyData();
    const today = new Date().toDateString();
    return data[today]?.totalCalories || 0;
  }

  getDailyData(): any {
    const cookie = this.getCookie('calorieTracker_data');
    return cookie ? JSON.parse(cookie) : {};
  }

  getCookie(name: string): string | null {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    return match ? decodeURIComponent(match[2]) : null;
  }
  saveDailyData(data: any) {
    this.setCookie('calorieTracker_data', JSON.stringify(data), 365);
  }
  saveProfile(profile: any) {
    this.setCookie('calorieTracker_profile', JSON.stringify(profile), 365);
  }
  addTodayFood(food: { name: string; calories: number }) {
    const today = new Date().toDateString();
    const data = this.getDailyData();

    if (!data[today]) {
      data[today] = {
        foods: [],
        totalCalories: 0,
      };
    }

    data[today].foods.push(food);
    data[today].totalCalories += food.calories;

    this.saveDailyData(data);
  }

  private setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(
      value
    )};expires=${expires};path=/`;
  }
}
