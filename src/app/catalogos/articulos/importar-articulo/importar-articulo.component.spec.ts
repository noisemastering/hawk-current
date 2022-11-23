import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarArticuloComponent } from './importar-articulo.component';

describe('ImportarArticuloComponent', () => {
  let component: ImportarArticuloComponent;
  let fixture: ComponentFixture<ImportarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportarArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
