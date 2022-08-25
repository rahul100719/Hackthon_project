import { TestBed } from '@angular/core/testing';

import { FileuplodService } from './fileuplod.service';

describe('FileuplodService', () => {
  let service: FileuplodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileuplodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
