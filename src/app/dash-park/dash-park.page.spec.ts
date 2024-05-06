import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashParkPage } from './dash-park.page';

describe('DashParkPage', () => {
  let component: DashParkPage;
  let fixture: ComponentFixture<DashParkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
