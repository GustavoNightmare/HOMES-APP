import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Details } from './details';
import { Housing } from '../housing';

describe('Details', () => {
  let component: Details;
  let fixture: ComponentFixture<Details>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Details],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '1' } } },
        },
        {
          provide: Housing,
          useValue: {
            getHousingLocationById: () => Promise.resolve(undefined),
            submitApplication: () => undefined,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Details);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
