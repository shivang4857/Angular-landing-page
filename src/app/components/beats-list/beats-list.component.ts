import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { BeatService } from '../../services/beat.service';
import { SearchService } from '../../services/search.service';

// Import your custom standalone components
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { BeatItemComponent } from '../beat-item/beat-item.component';

@Component({
  selector: 'app-beats-list',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, BeatItemComponent],
  template: `
    <div class="p-6 bg-[#1e1e1e] text-white min-h-screen">
      <app-search-bar></app-search-bar>

      <div *ngIf="loading" class="text-gray-400 text-center">Loading beats...</div>
      <div *ngIf="error" class="text-red-500 text-center">{{ error }}</div>

      <div *ngIf="filteredBeats.length > 0; else noBeats" class="flex flex-col gap-1">
        <app-beat-item *ngFor="let beat of filteredBeats" [beat]="beat" class="beat-card"></app-beat-item>
      </div>

      <ng-template #noBeats>
        <p class="text-gray-400 text-center">No beats found for your search.</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .beat-card {
      width: 100%;
      background: #1e1e1e;
      padding: 2px;
      border-radius: 1px;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;
      opacity: 0.9;
    }
  `]
})
export class BeatListComponent implements OnInit, OnDestroy {
  beats: any[] = [];
  filteredBeats: any[] = [];
  loading = false;
  error: string | null = null;
  private searchSubscription!: Subscription;

  constructor(private beatService: BeatService, private searchService: SearchService) {}

  ngOnInit() {
    this.fetchBeats();
    this.searchSubscription = this.searchService.searchQuery$.subscribe((query) => {
      this.filterBeats(query);
    });
  }

  fetchBeats() {
    this.loading = true;
    this.beatService.getTrendingBeats().subscribe({
      next: (data) => {
        if (data && data.playlists && data.playlists.length > 0) {
          this.beats = data.playlists[0].beats || [];
          this.filteredBeats = [...this.beats]; // Initialize with full beat list
        } else {
          this.error = 'No beats found.';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching beats:', err);
        this.error = 'Failed to load beats.';
        this.loading = false;
      }
    });
  }

  filterBeats(query: string) {
    this.filteredBeats = this.beats.filter((beat) =>
      beat.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
