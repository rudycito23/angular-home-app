{/* To generate a new interface for your app: ng generate interface interfaceName 
    
    Interfaces are custom data types for your app. Angular uses TS to take 
    advantage of working in a strongly typed programming environment. Strong 
    type checking reduces the likelihood of one element in your app sending 
    incorrectly formatted data to another. Such type-mismatch errors are caught 
    by the TS compiler and many such errors can also be caught in your IDE. 

    You can create a test house to use your interface:
    1. import { yourInterface } from 'file location'
    2. create a single instance under your 
        export class Component {
            readonly baseUrl = 'location of image';

            housingLocation: HousingLocation = {  // housingLocation = variable; HousingLocation = interface
            id: 9999,
            name: 'Test home',
            city: 'Test city',
            state: 'Test state',
            photo: `${this.baseUrl}/example-photo.jpg`,
            availableUnits: 99,
            wifi: true,
            laundry: false,    
            };
        } 
    
    */}

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
