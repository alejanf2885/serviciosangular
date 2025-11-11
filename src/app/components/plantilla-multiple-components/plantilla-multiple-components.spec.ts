import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaMultipleComponents } from './plantilla-multiple-components';

describe('PlantillaMultipleComponents', () => {
  let component: PlantillaMultipleComponents;
  let fixture: ComponentFixture<PlantillaMultipleComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaMultipleComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillaMultipleComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
