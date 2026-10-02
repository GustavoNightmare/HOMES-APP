import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../interfaces/housinglocation';
import { HousingLocation } from '../housing-location/housing-location';
@Component({
  imports: [],
  selector: 'app-details',
  styleUrl: './details.css',
  templateUrl: './details.html',
})
export class Details {
    private readonly route = inject(ActivatedRoute);
  private readonly housing = inject(Housing);
  housingLocationId = -1;
  InformacionCasa : HousingLocationInfo  | undefined ;

  constructor() {
    this.housingLocationId =
      Number(this.route.snapshot.params['id']);
    this.InformacionCasa = this.housing.getHousingLocationById(this.housingLocationId)
  }


}
