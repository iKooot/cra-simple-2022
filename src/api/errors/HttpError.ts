export abstract class HttpError extends Error {
  protected constructor(public readonly status: number, public readonly statusText: string) {
    super();
  }

  public get message(): string {
    return `${this.name}: Request failed with ${this.status} - ${this.statusText}`;
  }
}
