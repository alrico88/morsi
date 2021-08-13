import React, { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ImPlay3, ImStop2 } from 'react-icons/im';
import PropTypes from 'prop-types';
import playMorse from '../morsePlayer';
import encodeInMorse from '../morse';
import CopyToClip from './CopyToClip';

let playbackControl = null;

function PlaybackControl({ text }) {
  const encoded = useMemo(() => encodeInMorse(text), [text]);
  const [isPlaying, setPlayingStatus] = useState(false);

  function playback() {
    const onEndFunc = () => {
      playbackControl = null;
      setPlayingStatus(false);
    };

    if (isPlaying) {
      if (playbackControl !== null) {
        playbackControl.stop();
      }
    } else {
      setPlayingStatus(true);
      playbackControl = playMorse(encoded, onEndFunc);
    }
  }

  const isDisabled = useMemo(() => encoded.length === 0, [encoded]);

  const buttonText = useMemo(() => (isPlaying ? 'Stop playback' : 'Play Morse code'), [isPlaying]);
  const buttonIcon = useMemo(() => (isPlaying ? <ImStop2 className="me-1" /> : <ImPlay3 className="me-1" />), [isPlaying]);

  return (
    <>
      <div className="d-flex">
        <Button className="w-100 me-2 align-middle" onClick={playback} variant="primary" disabled={isDisabled}>
          {buttonIcon}
          {buttonText}
        </Button>
        <CopyToClip text={encoded} disabled={isDisabled} />
      </div>
    </>
  );
}

PlaybackControl.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PlaybackControl;
