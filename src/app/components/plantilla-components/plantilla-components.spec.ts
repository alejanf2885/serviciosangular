import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaComponents } from './plantilla-components';

describe('PlantillaComponents', () => {
  let component: PlantillaComponents;
  let fixture: ComponentFixture<PlantillaComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
