import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesComponents } from './coches-components';

describe('CochesComponents', () => {
  let component: CochesComponents;
  let fixture: ComponentFixture<CochesComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CochesComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CochesComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
