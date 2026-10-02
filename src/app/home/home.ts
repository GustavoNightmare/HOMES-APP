import { Component,inject } from '@angular/core';
import { HousingLocationInfo } from '../interfaces/housinglocation';
import { HousingLocation } from '../housing-location/housing-location';
import { Housing } from '../housing';
@Component({
  imports: [HousingLocation],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {
readonly housingService =inject(Housing);
housingLocationList =
  this.housingService.getAllHousingLocations();
}
