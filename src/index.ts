function strictText(value: string, max = 16384): void {
  if (typeof value !== 'string') throw new TypeError('Expected string');
  if (value.length > max) throw new RangeError('Text length budget exceeded');
}
export function rot13(text: string): string {
  strictText(text);
  return text.replace(/[A-Za-z]/g, (c) => {
    const n = c.charCodeAt(0),
      base = n <= 90 ? 65 : 97;
    return String.fromCharCode(base + ((n - base + 13) % 26));
  });
}
