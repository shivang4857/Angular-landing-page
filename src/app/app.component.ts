
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BeatListComponent } from './components/beats-list/beats-list.component';
import { CategoryDropdownComponent } from './components/category-dropdown/category-dropdown.component';
import { ExploreBeatsComponent } from './components/explore-beats/explore-beats.component';
import { FancySliderComponent } from './fancy-slider/fancy-slider.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FiltersComponent, BeatListComponent , CategoryDropdownComponent, ExploreBeatsComponent,FancySliderComponent],
  template: `
    <app-navbar></app-navbar>
    <app-category-dropdown></app-category-dropdown>
   <app-fancy-slider></app-fancy-slider>
    <app-explore-beats></app-explore-beats>
    <app-filters></app-filters>
    <app-beats-list></app-beats-list>
  `,
  styles: []
})


export class AppComponent {
  title = 'beats-marketplace';
}
