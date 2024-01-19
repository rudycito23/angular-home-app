{/* to generate a new component: ng generate component componentName --skip-tests
    also add the --skip-import flag to skip importing in NgModule

    *ngFor = a directive used to dynamically repeat data in a template. In JS,
              you would use a for-loop. You can utilize *ngFor to iterate over
              arrays and even asynchronous values. Example: line 23 
            
    Add a property binding to a component's template: sharing data from the 
    parent component -> child component by binding data to those properties in 
    the template using property binding.
  
    Property binding enables you to connect a variable to an Input in an Angular 
    template. The data is then dynamically bound to the Input. 
  
    Example - line 32: <app-housing-location [housingLocation]="housingLocation" 
    = [attribute] = "value" syntax to notify Angular that the assigned value should
    be treated as a property from the component class and not a string value. The 
    value on the right is the name of the property from HomeComponent */}

import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
  }
}
