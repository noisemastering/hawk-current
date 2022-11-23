import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcartWidgetComponent } from './subcart-widget.component';

describe('SubcartWidgetComponent', () => {
  let component: SubcartWidgetComponent;
  let fixture: ComponentFixture<SubcartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcartWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
