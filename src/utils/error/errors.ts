export type ErrorOptionWithCode = ErrorOptions & { code?: string };

export abstract class ApplicationError extends Error {
  private _applicationError = 'applicationError' as const;
  public code?: string;

  constructor(message: string, options?: ErrorOptionWithCode) {
    super(message, options);
    this.name = this.constructor.name;
    this.code = options && options.code;

    // Cleaner stack trace for v8
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}
export const isApplicationError = (error: any): error is ApplicationError =>
  error?._applicationError === 'applicationError';

export class BadRequestError extends ApplicationError {
  private _badRequestError = 'badRequestError' as const;

  public get tag(): 'badRequestError' {
    return this._badRequestError;
  }

  constructor(message: string);
  constructor(message: string, error?: ErrorOptionWithCode);
  constructor(message: string, errorOption?: ErrorOptionWithCode | Error) {
    super(message, errorOption);
  }
}
export const isBadRequestError = (error: any): error is BadRequestError =>
  error?._badRequestError === 'badRequestError';

export class InternalError extends ApplicationError {
  private _internalError = 'internalError' as const;

  public get tag(): 'internalError' {
    return this._internalError;
  }

  constructor(message: string);
  constructor(message: string, error?: ErrorOptionWithCode);
  constructor(message: string, errorOption?: ErrorOptionWithCode | Error) {
    super(message, errorOption);
  }
}
export const isInternalError = (error: any): error is InternalError =>
  error?._internalError === 'internalError';

export class NotFoundError extends ApplicationError {
  public fieldName: string | undefined;

  private _notFoundError = 'notFoundError' as const;

  public get tag(): 'notFoundError' {
    return this._notFoundError;
  }

  constructor(message: string);
  constructor(message: string, error?: ErrorOptionWithCode);
  constructor(message: string, errorOption?: ErrorOptionWithCode | Error) {
    super(message, errorOption);
  }
}
export const isNotFoundError = (error: any): error is NotFoundError =>
  error?._notFoundError === 'notFoundError';

export class UnauthorizedError extends ApplicationError {
  private _unauthorizedError = 'unauthorizedError' as const;

  public get tag(): 'unauthorizedError' {
    return this._unauthorizedError;
  }

  constructor(message: string);
  constructor(message: string, error?: ErrorOptionWithCode);
  constructor(message: string, errorOption?: ErrorOptionWithCode | Error) {
    super(message, errorOption);
  }
}
export const isUnauthorizedError = (error: any): error is UnauthorizedError =>
  error?._unauthorizedError === 'unauthorizedError';

export class DatabaseError extends ApplicationError {
  private _databaseError = 'databaseError' as const;

  public get tag(): 'databaseError' {
    return this._databaseError;
  }

  constructor(message: string);
  constructor(message: string, error?: ErrorOptionWithCode);
  constructor(message: string, errorOption?: ErrorOptionWithCode | Error) {
    super(message, errorOption);
  }
}
export const isDatabaseError = (error: any): error is DatabaseError =>
  error?._databaseError === 'databaseError';

export class IntegrationError extends ApplicationError {
  private _integrationError = 'integrationError' as const;

  public get tag(): 'integrationError' {
    return this._integrationError;
  }

  constructor(message: string);
  constructor(message: string, error?: ErrorOptionWithCode);
  constructor(message: string, errorOption?: ErrorOptionWithCode | Error) {
    super(message, errorOption);
  }
}
export const isIntegrationError = (error: any): error is IntegrationError =>
  error?._integrationError === 'integrationError';
