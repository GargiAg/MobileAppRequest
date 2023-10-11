import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TotalrequestapplicationsPage } from './totalrequestapplications.page';

describe('TotalrequestapplicationsPage', () => {
  let component: TotalrequestapplicationsPage;
  let fixture: ComponentFixture<TotalrequestapplicationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TotalrequestapplicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
