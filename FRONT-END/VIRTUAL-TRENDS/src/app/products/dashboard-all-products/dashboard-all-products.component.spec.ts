import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllProductsComponent } from './dashboard-all-products.component';

describe('DashboardAllProductsComponent', () => {
  let component: DashboardAllProductsComponent;
  let fixture: ComponentFixture<DashboardAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAllProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
