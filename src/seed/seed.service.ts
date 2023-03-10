import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  constructor() {}

  populateDB() {
    return 'SEED Executed Successfully';
  }
}
