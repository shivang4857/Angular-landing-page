import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  template: `
    <div class="flex gap-2 p-4">
      <button class="px-4 py-2 text-sm  rounded-full border border-gray-500 bg-transparent transition duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500 hover:text-white">
        Trending Beats
      </button>
      <button class="px-4 py-2 text-sm  rounded-full border border-gray-500 bg-transparent transition duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white">
        WAV under ₹999
      </button>
      <button class="px-4 py-2 text-sm  rounded-full border border-gray-500 bg-transparent transition duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white">
        Wav + Stems under ₹1,999
      </button>
      <button class="px-4 py-2 text-sm  rounded-full border border-gray-500 bg-transparent transition duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white">
        Exclusive Deals
      </button>
    </div>
  `,
  styles: []
})
export class FiltersComponent {}
