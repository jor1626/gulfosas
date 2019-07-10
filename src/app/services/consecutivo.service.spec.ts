/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsecutivoService } from './consecutivo.service';

describe('Service: Consecutivo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsecutivoService]
    });
  });

  it('should ...', inject([ConsecutivoService], (service: ConsecutivoService) => {
    expect(service).toBeTruthy();
  }));
});
