import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  HttpServer,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import {
  ApplicationError,
  BadRequestError,
  DatabaseError,
  NotFoundError,
  UnauthorizedError,
} from './errors';
// import { AppLogger, LogContext } from '@utils/logger';

@Catch(ApplicationError)
export class HttpErrorFilter extends BaseExceptionFilter {
  // private logger: AppLogger;
  constructor(httpServer?: HttpServer) {
    super(httpServer);
    // this.logger = new AppLogger(HttpErrorFilter.name);
  }
  catch(exception: ApplicationError, host: ArgumentsHost): void {
    // const http = host.switchToHttp();
    // const type = host.getType();
    // const request = http.getRequest();
    // const response = http.getResponse();

    // const metadata: LogContext = {
    //   response: {
    //     // remoteAdd: '', // TODO
    //     statusCode: response && response.statusCode,
    //     statusMessage: response && response.statusMessage,
    //   },
    // };

    if (exception instanceof BadRequestError) {
      return super.catch(new BadRequestException(), host);
    }

    if (exception instanceof UnauthorizedError) {
      return super.catch(new UnauthorizedException(), host);
    }

    if (exception instanceof NotFoundError) {
      return super.catch(new NotFoundException(), host);
    }

    if (exception instanceof DatabaseError) {
      // this.logger.error('Database Error', undefined, { ...metadata });
      return super.catch(new InternalServerErrorException(), host);
    }

    // this.logger.error('Unknown Error', undefined, {
    //   ...metadata,
    //   cause: exception.cause,
    //   causeStack: exception.stack,
    // });
    return super.catch(new InternalServerErrorException(), host);
  }
}
