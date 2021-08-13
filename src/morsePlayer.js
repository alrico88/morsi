const dot = 1.2 / 15;

let oscillator;

/**
 * Plays morse encoded sentences with HTML5 Audio API
 * @param {string} encoded Message string in morse code
 * @param {Function} onEndFunc Function to execute on playback end
 * @returns {OscillatorNode}
 */
export default function playMorse(encoded, onEndFunc) {
  if (oscillator) {
    oscillator.stop();
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();

  oscillator = ctx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = 600;
  oscillator.onended = onEndFunc;

  let t = ctx.currentTime;

  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, t);

  t += 0.1; // Don't start at 0 because of Firefox missing the first beat

  encoded.split('').forEach((symbol) => {
    switch (symbol) {
      case '.':
        gainNode.gain.setValueAtTime(1, t);
        t += dot;
        gainNode.gain.setValueAtTime(0, t);
        t += dot;
        break;
      case '-':
        gainNode.gain.setValueAtTime(1, t);
        t += 3 * dot;
        gainNode.gain.setValueAtTime(0, t);
        t += dot;
        break;
      default:
        t += 3 * dot;
        break;
    }
  });

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(t);

  return oscillator;
}
