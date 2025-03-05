import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fancy-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full flex flex-col items-center">
      <!-- Slider Container -->
      <div class="w-full relative flex justify-center items-center">
        <!-- Left Navigation Button -->
        <button (click)="prev()" 
                class="absolute left-4 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
          <span class="text-xl font-bold text-black">&lt;</span>
        </button>
  
        <!-- Slides -->
        <div class="relative w-full h-80 flex justify-center items-center overflow-hidden">
          <ng-container *ngFor="let image of images; let i = index">
            <div *ngIf="isVisible(i)" 
                 [ngClass]="getPositionClass(i)" 
                 class="absolute transition-all duration-500 ease-in-out">
              <img [src]="image" alt="Slide {{ i }}" class="w-64 h-64 object-cover rounded-md" />
            </div>
          </ng-container>
        </div>
  
        <!-- Right Navigation Button -->
        <button (click)="next()" 
                class="absolute right-4 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
          <span class="text-xl font-bold text-black">&gt;</span>
        </button>
      </div>
  
      <!-- Navigation Dots -->
      <div class="flex space-x-2 mt-4">
        <span *ngFor="let image of images; let i = index" 
              (click)="goToSlide(i)"
              class="w-3 h-3 rounded-full cursor-pointer"
              [ngClass]="{'bg-purple-600': i === currentIndex, 'bg-gray-400': i !== currentIndex}">
        </span>
      </div>

<div class="flex items-center justify-center shrink-0 rounded-lg mt-4"
     style="width: 1001px; height: 60px; padding: 6px 8px 6px 32px; border: 0.75px solid #616161; background: #303030;">
  
  <!-- Search Input & Icon Container -->
  <div class="flex items-center space-x-2">
   <!-- Search Icon -->
    <img src="Search.png" alt="Search" class="w-5 h-5 opacity-70" />
    <!-- Placeholder Text -->
    <span class="text-white opacity-70">Search top beats</span>

   
  </div>
</div>




    </div>
  `,
  styles: []
})
export class FancySliderComponent {

  // List of image paths (update these as needed)
  images = [
    'Frame 480964977.png',
    'Rectangle 1.png',
    'image.png',
    'Frame 480964993.png',
    'image.png'
  ];

  // Active (center) slide index
  currentIndex = 0;

  // Returns true if the slide is either the current one, left neighbor, or right neighbor.
  isVisible(i: number): boolean {
    return i === this.currentIndex || i === this.getLeftIndex() || i === this.getRightIndex();
  }

  // Helper to compute the left neighbor (infinite looping)
  getLeftIndex(): number {
    return (this.currentIndex + this.images.length - 1) % this.images.length;
  }

  // Helper to compute the right neighbor (infinite looping)
  getRightIndex(): number {
    return (this.currentIndex + 1) % this.images.length;
  }

  // Returns Tailwind CSS classes based on the image's position relative to currentIndex.
  getPositionClass(i: number): string {
    if (i === this.currentIndex) {
      return 'z-20 translate-x-0 scale-100 opacity-100';
    } else if (i === this.getLeftIndex()) {
      return 'z-10 -translate-x-40 scale-90 opacity-70';
    } else if (i === this.getRightIndex()) {
      return 'z-10 translate-x-40 scale-90 opacity-70';
    }
    return 'hidden';
  }

  // Navigate to the next slide (infinite)
  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Navigate to the previous slide (infinite)
  prev(): void {
    this.currentIndex = (this.currentIndex + this.images.length - 1) % this.images.length;
  }

  // Directly go to a particular slide (via dot navigation)
  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
