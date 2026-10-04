import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../interfaces/housinglocation';
import { HousingLocation } from '../housing-location/housing-location';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-details',
  styleUrl: './details.css',
  templateUrl: './details.html',
})
export class Details {
    private readonly route = inject(ActivatedRoute);
  private readonly housing = inject(Housing);
  housingLocationId = -1;
  InformacionCasa : HousingLocationInfo  | undefined ;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() {
    this.housingLocationId =
      Number(this.route.snapshot.params['id']);
    this.InformacionCasa = this.housing.getHousingLocationById(this.housingLocationId)
  }
  submitApplication() {
    this.housing.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}
