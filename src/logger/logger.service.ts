import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  count = 0;
  log(): void {
    this.count++;
    console.log(this.count);
  }
}
