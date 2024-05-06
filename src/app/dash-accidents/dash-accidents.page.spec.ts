import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashAccidentsPage } from './dash-accidents.page';

describe('DashAccidentsPage', () => {
  let component: DashAccidentsPage;
  let fixture: ComponentFixture<DashAccidentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAccidentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
