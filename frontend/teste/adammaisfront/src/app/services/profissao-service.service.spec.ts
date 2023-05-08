import { TestBed } from '@angular/core/testing';

import { ProfissaoServiceService } from './profissao-service.service';

describe('ProfissaoServiceService', () => {
  let service: ProfissaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfissaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
