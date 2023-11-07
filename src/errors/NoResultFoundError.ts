class NoResultFoundError extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, NoResultFoundError.prototype);
  }
}

export default NoResultFoundError;
