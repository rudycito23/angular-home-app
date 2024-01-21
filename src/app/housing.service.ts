{
  /* To generate a new service for your app: ng generate service serviceName --skip-tests

    A service provides a way for you to separate Angular app data and functions that can
    be used by multiple components in your app; to be used by multiple components, 
    a service must be made injectable.
    
    Dependency injection: is the mechanism that manages the dependencies of an app's
    components and the services that other components can use.
  
    Services that are injectable and used by a component become dependencies of that
    component. The component depends on those services and can't function without
    them.*/
}

import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
