import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-explore-beats',
  standalone: true,
  templateUrl: './explore-beats.component.html',
  styleUrls: ['./explore-beats.component.css']
})
export class ExploreBeatsComponent {
  constructor(private location: Location) {}

  refreshPage() {
    this.location.go(this.location.path());
    window.location.reload();
  }
}