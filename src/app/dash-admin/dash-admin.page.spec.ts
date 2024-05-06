import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashAdminPage } from './dash-admin.page';

describe('DashAdminPage', () => {
  let component: DashAdminPage;
  let fixture: ComponentFixture<DashAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
