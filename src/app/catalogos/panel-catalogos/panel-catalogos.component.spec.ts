import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCatalogosComponent } from './panel-catalogos.component';

describe('PanelCatalogosComponent', () => {
  let component: PanelCatalogosComponent;
  let fixture: ComponentFixture<PanelCatalogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCatalogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
