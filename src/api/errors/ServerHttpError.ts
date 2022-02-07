import { HttpError } from './HttpError';

export class ServerHttpError extends HttpError {
  constructor(status: number, statusText: string) {
    super(status, statusText);

    this.name = 'ServerHttpError';
  }
}
