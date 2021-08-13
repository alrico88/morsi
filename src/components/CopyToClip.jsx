import React, { useEffect, useMemo, useState } from 'react';
import useClipboard from 'react-use-clipboard';
import { ImClipboard, ImCheckmark } from 'react-icons/im';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CopyToClip({ text, disabled }) {
  const [showToast, setToastVisibility] = useState(false);
  const [isCopied, setCopied] = useClipboard(text, {
    successDuration: 3000,
  });

  const copyButton = useMemo(() => ({
    text: isCopied ? 'Copied to clipboard' : 'Copy to clipboard',
    icon: isCopied ? <ImCheckmark /> : <ImClipboard />,
  }), [isCopied]);

  useEffect(() => {
    setToastVisibility(isCopied);
  }, [isCopied]);

  return (
    <Button className="w-100 align-middle" onClick={setCopied} variant="primary" disabled={disabled}>
      <span className="me-1">{copyButton.icon}</span>
      {copyButton.text}
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
