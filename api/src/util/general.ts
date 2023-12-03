export function isNumeric(s: any) {
  return !isNaN(s - parseFloat(s));
}
