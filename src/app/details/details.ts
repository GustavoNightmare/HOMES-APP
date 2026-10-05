import { ChangeDetectorRef, Component, inject } from '@angular/core';
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
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
  housingLocationId = -1;
  InformacionCasa : HousingLocationInfo  | undefined ;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housing.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.InformacionCasa = housingLocation;
      this.changeDetectorRef.markForCheck();
    });
  }
  submitApplication() {
    this.housing.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}
