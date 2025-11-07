import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasStandaAloComponent } from './personas-standa-alo.component';

describe('PersonasStandaAloComponent', () => {
  let component: PersonasStandaAloComponent;
  let fixture: ComponentFixture<PersonasStandaAloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasStandaAloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasStandaAloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
