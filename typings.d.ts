declare module "*.json" {
  const value: any;
  export default value;
}

interface PromiseConstructor {
  all<T>(values: PromiseLike<T>[]): Promise<[T]>;
}