import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEComponent } from './actualizar-e.component';

describe('ActualizarEComponent', () => {
  let component: ActualizarEComponent;
  let fixture: ComponentFixture<ActualizarEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
