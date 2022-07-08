import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesitebNavigationBarComponent } from './wesiteb-navigation-bar.component';

describe('WesitebNavigationBarComponent', () => {
  let component: WesitebNavigationBarComponent;
  let fixture: ComponentFixture<WesitebNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WesitebNavigationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WesitebNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
