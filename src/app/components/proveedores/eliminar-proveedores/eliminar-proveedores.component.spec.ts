import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProveedoresComponent } from './eliminar-proveedores.component';

describe('EliminarProveedoresComponent', () => {
  let component: EliminarProveedoresComponent;
  let fixture: ComponentFixture<EliminarProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
