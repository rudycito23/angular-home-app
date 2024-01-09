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

@Component({
  selector: 'app-housing-location',
  standalone: true,
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
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
