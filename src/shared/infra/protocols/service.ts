export default interface Service<T, R> {
  execute(httpRequest: T): Promise<R>;
}
