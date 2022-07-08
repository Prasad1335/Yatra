import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFlightPageComponent } from './web-flight-page.component';

describe('WebFlightPageComponent', () => {
  let component: WebFlightPageComponent;
  let fixture: ComponentFixture<WebFlightPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebFlightPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFlightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
