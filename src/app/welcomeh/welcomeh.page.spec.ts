import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomehPage } from './welcomeh.page';

describe('WelcomehPage', () => {
  let component: WelcomehPage;
  let fixture: ComponentFixture<WelcomehPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomehPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
