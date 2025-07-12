import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Header } from './components/header/header';
import { Summary } from './components/summary/summary';
import { History } from './components/history/history';
import { AddFoodModal } from './components/modals/add-food-modal/add-food-modal';
import { WelcomeModal } from './components/modals/welcome-modal/welcome-modal';
import { DayDetailsModal } from './components/modals/day-details-modal/day-details-modal';
import { CalorieTracker } from './services/calorie-tracker';
import { CommonModule } from '@angular/common';
import * as foodList from '../../public/data/food_list.json';
import { any } from 'zod';
// import { json } from 'zod/v4';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Summary,
    History,
    AddFoodModal,
    WelcomeModal,
    DayDetailsModal,
  ],
  templateUrl: './app.html',
  styleUrls: ['../../dist/output.scss'],
})
export class App {
  protected title = 'calorie_counter';
  totalToday = 0;
  //profile: any = null;
  profile: any = {
    maintenanceCalories: 0,
  };
  dailyData: any = {};
  private calorieService = inject(CalorieTracker);
  showWelcomeModal = false;
  foodList: any[] = [];
  progress = 0;
  ngOnInit() {
    this.profile = this.calorieService.getProfile();
    this.totalToday = this.calorieService.getTodayCalories();
    this.dailyData = this.calorieService.getDailyData();
    if (this.profile) {
      this.progress = Math.round(
        (this.totalToday / this.profile.maintenanceCalories == null
          ? 0
          : this.profile.maintenanceCalories) * 100
      );
    } else {
      this.progress = 0;
    }
    if (!this.profile) {
      this.profile = {
        maintenanceCalories: 0,
      };
      console.log('🔔 Show Welcome Modal');
      this.showWelcomeModal = true;
    }
    //  const foodData = ;
    //  console.log('🍽️ Food List Loaded:', foodData);
    //  this.foodList = (foodList as any).default || [];
    //   console.log('🍽️ Food List:', this.foodList);
    fetch('../../data/food_list.json')
      .then((response) => response.json())
      .then((data) => {
        this.foodList = data.map((item: any) => ({
          name: item['Dish Name'],
          calories: item['Calories (kcal)'],
        }));
      });
  }
  handleProfileSubmit(profile: any) {
    this.profile = profile;
    this.calorieService.saveProfile(profile);
    this.totalToday = this.calorieService.getTodayCalories();
    this.dailyData = this.calorieService.getDailyData();
    this.showWelcomeModal = false;
  }
  selectedDay: string = '';
  selectedDayFoods: any[] = [];
  showDayDetailsModal = false;

  onViewDay(date: string) {
    const entry = this.dailyData[date];
    if (entry && entry.foods) {
      this.selectedDay = date;
      this.selectedDayFoods = entry.foods;
      this.showDayDetailsModal = true;
    }
  }

  //get food list from json file

  // constructor() {

  // }
  showAddModal = false;

  handleFoodAdd(food: any) {
    this.calorieService.addTodayFood(food);
    this.totalToday = this.calorieService.getTodayCalories();
    this.dailyData = this.calorieService.getDailyData();
  }
}
