import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDistribuirComponent } from './crear-distribuir.component';

describe('CrearDistribuirComponent', () => {
  let component: CrearDistribuirComponent;
  let fixture: ComponentFixture<CrearDistribuirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDistribuirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDistribuirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
