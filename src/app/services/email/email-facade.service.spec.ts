import { TestBed } from '@angular/core/testing';

import { EmailFacadeService } from './email-facade.service';

describe('EmailFacadeService', () => {
  let service: EmailFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
