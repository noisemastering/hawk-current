import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMaestroComponent } from './eliminar-maestro.component';

describe('EliminarMaestroComponent', () => {
  let component: EliminarMaestroComponent;
  let fixture: ComponentFixture<EliminarMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
