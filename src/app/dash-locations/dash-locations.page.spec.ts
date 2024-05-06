import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashLocationsPage } from './dash-locations.page';

describe('DashLocationsPage', () => {
  let component: DashLocationsPage;
  let fixture: ComponentFixture<DashLocationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashLocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
