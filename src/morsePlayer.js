const dot = 1.2 / 15;

let oscillator;

export default function playMorse(encoded) {
  if (oscillator) {
    oscillator.stop();
  }

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();

  oscillator = ctx.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = 600;

  let t = ctx.currentTime;

  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, t);

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
}
