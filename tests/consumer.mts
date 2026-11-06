import { rot13 } from '@lp-labs/rot13-codec';
if (rot13(rot13('Message')) !== 'Message') throw new Error('ROT13');
// @ts-expect-error invalid argument must be rejected by declarations
rot13(42);
