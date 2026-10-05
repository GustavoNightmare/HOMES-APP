import { ChangeDetectorRef, Component, inject } from '@angular/core';
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
filteredLocationList: HousingLocationInfo[] = [];
readonly housingService =inject(Housing);
readonly changeDetectorRef = inject(ChangeDetectorRef);
housingLocationList: HousingLocationInfo[] = [];
constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        this.changeDetectorRef.markForCheck();
      });
  }
filterResults(text: string) {
  const searchTerm = text.trim().toLowerCase();

  if (!searchTerm) {
    this.filteredLocationList = this.housingLocationList;
    return;
  }

  this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
    housingLocation.city.toLowerCase().includes(searchTerm),
  );
}
}
