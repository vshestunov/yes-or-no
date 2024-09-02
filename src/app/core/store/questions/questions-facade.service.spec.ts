import { TestBed } from '@angular/core/testing';

import { QuestionsFacadeService } from './questions-facade.service';

describe('QuestionsFacadeService', () => {
  let service: QuestionsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
