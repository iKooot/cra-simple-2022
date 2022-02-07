import { HttpError } from './HttpError';

export class RedirectHttpError extends HttpError {
  constructor(status: number, statusText: string, public redirectUrl: string) {
    super(status, statusText);

    this.name = 'RedirectHttpError';
  }
}
