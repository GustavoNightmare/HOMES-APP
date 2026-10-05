import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HousingLocation } from './housing-location';

describe('HousingLocation', () => {
  let component: HousingLocation;
  let fixture: ComponentFixture<HousingLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocation],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HousingLocation);
    fixture.componentRef.setInput('housingLocation', {
      id: 1,
      name: 'Test Housing',
      city: 'Bogota',
      state: 'DC',
      photo: '',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
