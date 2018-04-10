import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicleChangeCaseComponent } from './new-vehicle-change-case.component';

describe('NewVehicleChangeCaseComponent', () => {
  let component: NewVehicleChangeCaseComponent;
  let fixture: ComponentFixture<NewVehicleChangeCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVehicleChangeCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVehicleChangeCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
