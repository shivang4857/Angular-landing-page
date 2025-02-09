import { Component, OnInit } from '@angular/core';
import { BeatService } from '../../services/beat.service';
import { CommonModule } from '@angular/common';
import { BeatItemComponent } from '../beat-item/beat-item.component';

@Component({
  selector: 'app-beats-list',
  standalone: true,
  imports: [CommonModule, BeatItemComponent],
  template: `
    <div class="p-6 bg-[#1e1e1e] text-white min-h-screen">
    

      <div *ngIf="loading" class="text-gray-400 text-center">Loading beats...</div>
      <div *ngIf="error" class="text-red-500 text-center">{{ error }}</div>

      <div *ngIf="beats.length > 0; else noBeats" class="flex flex-col gap-1">
        <app-beat-item *ngFor="let beat of beats" [beat]="beat" class="beat-card"></app-beat-item>
      </div>

      <ng-template #noBeats>
        <p class="text-gray-400 text-center">No beats available at the moment.</p>
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
export class BeatListComponent implements OnInit {
  beats: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private beatService: BeatService) {}

  ngOnInit() {
    this.fetchBeats();
  }

  fetchBeats() {
    this.loading = true;
    this.beatService.getTrendingBeats().subscribe({
      next: (data) => {
        if (data && data.playlists && data.playlists.length > 0) {
          this.beats = data.playlists[0].beats || [];
        } else {
          this.error = "No beats found.";
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching beats:', err);
        this.error = "Failed to load beats.";
        this.loading = false;
      }
    });
  }
}
