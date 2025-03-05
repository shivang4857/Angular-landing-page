import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="flex items-center justify-between p-4 bg-[#1e1e1e] text-white">
      <!-- Logo + Search -->
      <div class="flex items-center gap-4">
        <img src="main-logo-white.png" alt="Logo" class="h-8" />

        <!-- Search Bar -->
        <div class="relative flex items-center border border-gray-500 rounded-md bg-[#2e2e2e] px-8">
       <input 
        type="text" 
  placeholder="Search top beats" 
  class="bg-transparent text-white placeholder-gray-400 p-2 pl-0 pr-20 rounded-md outline-none w-60"
/>

          
          <!-- Dropdown -->
          <button 
            class="absolute right-0 px-2 py-2 text-sm bg-[#3a3a3a] text-white rounded-r-md flex items-center gap-1"
            (click)="toggleDropdown()"
          >
            {{ selectedCategory }} <span>▼</span>
          </button>
          
          <!-- Dropdown Menu -->
          <div 
            *ngIf="dropdownOpen" 
            class="absolute top-12 right-0 w-36 bg-[#3f3f3f] text-white rounded-md shadow-md z-10"
          >
            <ul class="p-2 space-y-1">
              <li class="px-4 py-2 hover:bg-[#3f3f3f] cursor-pointer" (click)="selectCategory('General')">General</li>
              <li class="px-4 py-2 hover:bg-[#3f3f3f] cursor-pointer" (click)="selectCategory('Top')">Beat</li>
              <li class="px-4 py-2 hover:bg-[#3f3f3f] cursor-pointer" (click)="selectCategory('Beats')">Tags</li>
              <li class="px-4 py-2 hover:bg-[#3f3f3f] cursor-pointer" (click)="selectCategory('Kamal')">Mood</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex items-center gap-4">
       <button style="background: transparent;" class="text-white px-4 py-2  ">
  Start Selling
</button>
             <button style="background: transparent;" class="text-white px-4 py-2  ">
  Sign In
</button>

<button class="relative text-white px-6 py-2 rounded-full border border-white/35 overflow-hidden 
               before:absolute before:left-0 before:top-0 before:h-full before:w-1/3 before:border-l-2 before:border-white/50 before:blur-sm">
  Sign Up
</button>







      </div>
    </nav>
  `,
  styles: [
    
  ],
})
export class NavbarComponent {
  dropdownOpen = false;
  selectedCategory = 'General';
  searchText = '';

  constructor(private searchService: SearchService) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.dropdownOpen = false;
  }

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
    this.searchService.setSearchQuery(this.searchText);
  }
}
