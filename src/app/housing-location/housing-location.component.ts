{
  /* To display values (properties and Input values) use interpolation in a 
    template.
  
    Using the {{ expression }} in Angular templates, you can render values from
    properties, Inputs, and valid JS expressions. Example: line 19, 21, 23 
  
    Notice, the value from {{ housingLocation.name }}, {{ housingLocation.state }}, {{ housingLocation.city }},
    corresponds from the properties located in housing-location.ts  */
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
{/* To use the routerLink directive, import RouterLink and RouterOutlet 
    Line 34: add the routerLink directive to an anchor tag <a></a> 
      the routerLink directive enables Angular's router to create dynamic links 
      in the app. The value assigned to the routerLink is an array with two entries, 
      the static path and the dynamic data; example below:
      
      [routerLink] = ['/path', dynamicData.id] */}
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
