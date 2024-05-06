import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashIncidentsPage } from './dash-incidents.page';

describe('DashIncidentsPage', () => {
  let component: DashIncidentsPage;
  let fixture: ComponentFixture<DashIncidentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashIncidentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
