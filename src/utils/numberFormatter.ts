/**
 * Number formatter for displaying large numbers in a compact form.
 * Ie. 1000 -> 1k, 1000000 -> 1M, 1000000000 -> 1B
 */
export const formatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1,
  maximumSignificantDigits: 3
}).format
