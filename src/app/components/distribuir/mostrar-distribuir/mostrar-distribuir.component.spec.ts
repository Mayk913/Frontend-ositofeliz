import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDistribuirComponent } from './mostrar-distribuir.component';

describe('MostrarDistribuirComponent', () => {
  let component: MostrarDistribuirComponent;
  let fixture: ComponentFixture<MostrarDistribuirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDistribuirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarDistribuirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
