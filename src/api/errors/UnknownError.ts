export class UnknownError extends Error {
  public readonly innerError: Error;

  constructor(innerError: Error) {
    super(innerError.message);

    this.innerError = innerError;
    this.name = 'UnknownError';
  }
}
