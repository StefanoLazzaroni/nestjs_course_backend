import { Injectable, NestMiddleware } from '@nestjs/common';
import { context, createStoreWithTransactionId } from '@utils/context';
import { Request, Response } from 'express';

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: Error | any) => void) {
    // eseguire la funzione next in un detereminato contesto
    const store = createStoreWithTransactionId();

    context.run(store, next);
  }
}
