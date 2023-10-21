export function capitalize(string) {
  if (string.length === 0) return string;

  return `${string[0].toUpperCase()}${string.substring(1).toLowerCase()}`;
}
