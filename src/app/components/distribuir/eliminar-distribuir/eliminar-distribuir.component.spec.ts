import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDistribuirComponent } from './eliminar-distribuir.component';

describe('EliminarDistribuirComponent', () => {
  let component: EliminarDistribuirComponent;
  let fixture: ComponentFixture<EliminarDistribuirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDistribuirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDistribuirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
