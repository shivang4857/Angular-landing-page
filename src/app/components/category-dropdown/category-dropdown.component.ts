import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-category-dropdown',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css'],
})
export class CategoryDropdownComponent {
  showBeats = false;
  showGenres = false;

  beatsList = [
    { icon: '🎵', name: 'All Beats' },
    { icon: '🔥', name: 'New Finds' },
    { icon: '🎧', name: 'New Releases' },
    { icon: '⭐', name: 'Featured' },
    { icon: '🎙️', name: 'Top Charts' },
    { icon: '🎶', name: 'Beats' },
    { icon: '🎵', name: 'Switch Beats' },
    { icon: '🎼', name: 'All Playlists' },
    { icon: '🎵', name: 'Guitar Beats ' },
    { icon: '🎺', name: 'Commerical Beats' },
    { icon: '🎙️', name: 'Chill Beats' },
  ];

  genresList = [
    { name: 'All Genre', img: 'all-genre-icon.png' },
    { name: 'Hip-hop', img: 'hiphop.jpg' },
    { name: 'Trap', img: 'trap.jpg' },
    { name: 'Drill', img: 'drill.jpg' },
    { name: 'R&B', img: 'rnb2.jpg' },
    { name: 'Indian', img: 'indian.jpg' }
  ];

  toggleBeats() {
    this.showBeats = !this.showBeats;
    this.showGenres = false;
  }

  toggleGenres() {
    this.showGenres = !this.showGenres;
    this.showBeats = false;
  }
}
