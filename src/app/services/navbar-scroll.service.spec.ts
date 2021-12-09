import { TestBed } from '@angular/core/testing';

import { NavbarScrollService } from './navbar-scroll.service';

describe('NavbarScrollService', () => {
  let service: NavbarScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
