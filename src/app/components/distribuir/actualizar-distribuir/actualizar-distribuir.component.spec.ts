import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDistribuirComponent } from './actualizar-distribuir.component';

describe('ActualizarDistribuirComponent', () => {
  let component: ActualizarDistribuirComponent;
  let fixture: ComponentFixture<ActualizarDistribuirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDistribuirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDistribuirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
