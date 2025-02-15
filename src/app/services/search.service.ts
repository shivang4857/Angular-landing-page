import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery = new BehaviorSubject<string>(''); // Stores the search query
  searchQuery$ = this.searchQuery.asObservable(); // Observable to listen for updates

  setSearchQuery(query: string) {
    this.searchQuery.next(query);
  }
}
