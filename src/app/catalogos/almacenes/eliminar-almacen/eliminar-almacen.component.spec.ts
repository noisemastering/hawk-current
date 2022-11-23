import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAlmacenComponent } from './eliminar-almacen.component';

describe('EliminarAlmacenComponent', () => {
  let component: EliminarAlmacenComponent;
  let fixture: ComponentFixture<EliminarAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAlmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
