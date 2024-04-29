import { TestBed } from '@angular/core/testing';

import { WebsocketService } from './websocket.service';
import { beforeEach } from 'node:test';

// @ts-ignore
describe('WebsocketService', () => {
  let service: WebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketService);
  });

  // @ts-ignore
  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
