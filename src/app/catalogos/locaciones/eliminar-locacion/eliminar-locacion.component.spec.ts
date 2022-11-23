import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLocacionComponent } from './eliminar-locacion.component';

describe('EliminarLocacionComponent', () => {
  let component: EliminarLocacionComponent;
  let fixture: ComponentFixture<EliminarLocacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarLocacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarLocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
