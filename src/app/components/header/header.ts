import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['../../../../dist/output.scss','./header.scss'] 
})
export class Header {
isDarkMode: boolean = false;

  ngOnInit() {
    // this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    // if (this.isDarkMode) {
    //   document.documentElement.classList.add('dark');
    // }
  }

  toggleDarkMode() {
    // console.log('🔄 Toggling dark mode');
    // this.isDarkMode = !this.isDarkMode;
    // document.documentElement.classList.toggle('dark', this.isDarkMode);
    // this.isDarkMode?document.documentElement.classList.add('dark'):document.documentElement.classList.remove('dark');
    // localStorage.setItem('darkMode', this.isDarkMode.toString());
   

  }
}
