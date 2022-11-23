import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMaestroComponent } from './editar-maestro.component';

describe('EditarMaestroComponent', () => {
  let component: EditarMaestroComponent;
  let fixture: ComponentFixture<EditarMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
