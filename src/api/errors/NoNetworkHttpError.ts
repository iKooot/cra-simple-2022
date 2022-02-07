export class NoNetworkHttpError extends Error {
  constructor() {
    super('No network detected');
  }
}
