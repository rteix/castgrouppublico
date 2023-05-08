import { TestBed } from '@angular/core/testing';

import { AdamAutenticadorService } from './adam-autenticador.service';

describe('AdamAutenticadorService', () => {
  let service: AdamAutenticadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdamAutenticadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
