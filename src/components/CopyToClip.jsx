import React, { useMemo } from 'react';
import useClipboard from 'react-use-clipboard';
import { BsCheckCircle, BsClipboardData } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CopyToClip({ text, disabled }) {
  const [isCopied, setCopied] = useClipboard(text, {
    successDuration: 3000,
  });
  const copyText = useMemo(() => (isCopied ? 'Copied to clipboard' : 'Copy to clipboard'), [isCopied]);

  const copyIcon = useMemo(() => (isCopied ? <BsCheckCircle /> : <BsClipboardData />), [isCopied]);

  return (
    <Button className="w-100 ms-2 align-middle" onClick={setCopied} variant="light" disabled={disabled}>
      <span className="me-1">{copyIcon}</span>
      {copyText}
    </Button>
  );
}

CopyToClip.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

CopyToClip.defaultProps = {
  disabled: false,
};

export default CopyToClip;
