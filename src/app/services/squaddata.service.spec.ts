import { TestBed, inject } from '@angular/core/testing';

import { SquaddataService } from './squaddata.service';

describe('SquaddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquaddataService]
    });
  });

  it('should be created', inject([SquaddataService], (service: SquaddataService) => {
    expect(service).toBeTruthy();
  }));
});
