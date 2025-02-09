import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beat-item',
  standalone: true,
  templateUrl: './beat-item.component.html',
  styleUrls: ['./beat-item.component.css']
})
export class BeatItemComponent {
  @Input() beat: any;

  getLowestPrice(prices: any[]): number {
    if (!prices || prices.length === 0) return 0;
    return Math.min(...prices.map(price => price.final_price));
  }

  formatKey(key: string | undefined): string {
    return key ? key.replace('_', ' ').toUpperCase() : 'N/A';
  }
}
