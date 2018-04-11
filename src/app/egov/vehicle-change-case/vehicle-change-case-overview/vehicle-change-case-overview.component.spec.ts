import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleChangeCaseOverviewComponent } from './vehicle-change-case-overview.component';

describe('VehicleChangeCaseOverviewComponent', () => {
  let component: VehicleChangeCaseOverviewComponent;
  let fixture: ComponentFixture<VehicleChangeCaseOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleChangeCaseOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleChangeCaseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
