import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCompraComponent } from './mostrar-compra.component';

describe('MostrarCompraComponent', () => {
  let component: MostrarCompraComponent;
  let fixture: ComponentFixture<MostrarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
