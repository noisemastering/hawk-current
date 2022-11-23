import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMaestroComponent } from './detalle-maestro.component';

describe('DetalleMaestroComponent', () => {
  let component: DetalleMaestroComponent;
  let fixture: ComponentFixture<DetalleMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMaestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
