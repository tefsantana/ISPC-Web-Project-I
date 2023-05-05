import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasTallasComponent } from './sistemas-tallas.component';

describe('SistemasTallasComponent', () => {
  let component: SistemasTallasComponent;
  let fixture: ComponentFixture<SistemasTallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasTallasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemasTallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
