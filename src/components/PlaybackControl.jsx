import React, { useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { BsPlayFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import playMorse from '../morsePlayer';
import encodeInMorse from '../morse';
import CopyToClip from './CopyToClip';

function PlaybackControl({ text }) {
  const encoded = useMemo(() => encodeInMorse(text), [text]);

  function playback() {
    playMorse(encoded);
  }

  const isDisabled = useMemo(() => encoded.length === 0, [encoded]);

  return (
    <div className="d-flex">
      <Button className="w-100 me-2 align-middle" onClick={playback} variant="light" disabled={isDisabled}>
        <BsPlayFill className="me-1" />
        Play Morse Code
      </Button>
      <CopyToClip text={encoded} disabled={isDisabled} />
    </div>
  );
}

PlaybackControl.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PlaybackControl;
