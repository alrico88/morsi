import React, { useMemo, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
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

  const playbackButton = useMemo(() => ({
    text: isPlaying ? 'Stop playback' : 'Play Morse code',
    icon: isPlaying ? <ImStop2 className="me-1" /> : <ImPlay3 className="me-1" />,
    variant: isPlaying ? 'secondary' : 'primary',
  }), [isPlaying]);

  return (
    <>
      <Row>
        <Col xs={12} md={6} className="mb-2 mb-md-0">
          <Button className="w-100 align-middle" onClick={playback} variant={playbackButton.variant} disabled={isDisabled}>
            {playbackButton.icon}
            {playbackButton.text}
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <CopyToClip text={encoded} disabled={isDisabled} />
        </Col>
      </Row>
    </>
  );
}

PlaybackControl.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PlaybackControl;
