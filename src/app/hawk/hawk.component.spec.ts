import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HawkComponent } from './hawk.component';

describe('HawkComponent', () => {
  let component: HawkComponent;
  let fixture: ComponentFixture<HawkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HawkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HawkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
