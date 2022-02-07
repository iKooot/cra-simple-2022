import { HttpError } from './HttpError';

export class ClientHttpError extends HttpError {
  constructor(status: number, statusText: string) {
    super(status, statusText);

    this.name = 'ClientHttpError';
  }
}
