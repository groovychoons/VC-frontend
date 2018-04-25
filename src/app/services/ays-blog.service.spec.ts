import { TestBed, inject } from '@angular/core/testing';

import { AysBlogService } from './ays-blog.service';

describe('AysBlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AysBlogService]
    });
  });

  it('should be created', inject([AysBlogService], (service: AysBlogService) => {
    expect(service).toBeTruthy();
  }));
});
