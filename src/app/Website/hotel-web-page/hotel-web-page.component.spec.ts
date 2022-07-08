import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelWebPageComponent } from './hotel-web-page.component';

describe('HotelWebPageComponent', () => {
  let component: HotelWebPageComponent;
  let fixture: ComponentFixture<HotelWebPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelWebPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelWebPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
