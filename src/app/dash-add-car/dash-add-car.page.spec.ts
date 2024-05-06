import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashAddCarPage } from './dash-add-car.page';

describe('DashAddCarPage', () => {
  let component: DashAddCarPage;
  let fixture: ComponentFixture<DashAddCarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAddCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
