import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule], 
  template: `
    <div class="search-bar-container">
      <div class="search-bar">
        <span class="search-icon">
          <img src="search-icon.png" alt="Search Icon" />
        </span>
        <input 
          type="text" 
          placeholder="Search top beats"
          [(ngModel)]="searchQuery"
           (ngModelChange)="onSearch()"
        />
      </div>
  
      <!-- Toggle Buttons -->
      <div class="toggle-buttons">
        <button class="toggle-btn">☰</button>
        <button class="toggle-btn">
          <img src="grid-icon.png" alt="Filter Icon" />
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchQuery = '';

  constructor(private searchService: SearchService) {}

  onSearch() {
    this.searchService.setSearchQuery(this.searchQuery.trim());
  }
}
