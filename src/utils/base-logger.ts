import { Logger } from '@nestjs/common';

export class BaseLogger {
  protected readonly logger: Logger;

  constructor() {
    this.logger = new Logger(this.constructor.name);
  }
}
