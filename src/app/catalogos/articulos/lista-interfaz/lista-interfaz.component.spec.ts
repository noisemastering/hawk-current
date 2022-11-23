import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInterfazComponent } from './lista-interfaz.component';

describe('ListaInterfazComponent', () => {
  let component: ListaInterfazComponent;
  let fixture: ComponentFixture<ListaInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInterfazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
