export function sortDates<T>(array: Array<T>, key: string) {
  array.sort((a, b) => new Date(b[key]).getTime() - new Date(a[key]).getTime());
}
