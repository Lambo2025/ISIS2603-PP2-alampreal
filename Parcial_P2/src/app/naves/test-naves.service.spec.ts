/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestNavesService } from './test-naves.service';

describe('Service: TestNaves', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestNavesService]
    });
  });

  it('should ...', inject([TestNavesService], (service: TestNavesService) => {
    expect(service).toBeTruthy();
  }));
});
