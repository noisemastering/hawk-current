import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLocacionComponent } from './agregar-locacion.component';

describe('AgregarLocacionComponent', () => {
  let component: AgregarLocacionComponent;
  let fixture: ComponentFixture<AgregarLocacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarLocacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarLocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
