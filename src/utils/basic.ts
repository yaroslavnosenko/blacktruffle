export const hasDuplicates = (array: unknown[]) => {
  return new Set(array).size !== array.length
}
