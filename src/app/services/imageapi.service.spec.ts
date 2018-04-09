import { TestBed, inject } from '@angular/core/testing';

import { ImageapiService } from './imageapi.service';

describe('ImageapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageapiService]
    });
  });

  it('should be created', inject([ImageapiService], (service: ImageapiService) => {
    expect(service).toBeTruthy();
  }));
});
