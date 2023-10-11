import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewapplicationPage } from './newapplication.page';

describe('NewapplicationPage', () => {
  let component: NewapplicationPage;
  let fixture: ComponentFixture<NewapplicationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewapplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
