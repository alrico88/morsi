import { encode } from 'morsee';
import removeDiacritics from 'remove-diacritics';

export default function encodeInMorse(text) {
  return encode(removeDiacritics(text));
}
