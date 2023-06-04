import { TestBed } from '@angular/core/testing';

import { ProductCarritoService } from './product-carrito.service';

describe('ProductCarritoService', () => {
  let service: ProductCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
