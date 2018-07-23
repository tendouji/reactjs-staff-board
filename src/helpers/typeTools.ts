// TODO: Use TS 2.8 ReturnType instead
// https://stackoverflow.com/a/46944148
interface Func<T> {
  ([...args]: any, args2?: any): T // tslint:disable-line
}
export function returnType<T>(func: Func<T>): T {
  return (false as any) as T
}
