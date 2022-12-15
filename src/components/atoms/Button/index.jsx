import React from 'react';
import './_button.scss';

export default function Button({ text, click }) {
  return (
    <button className="button" type="button" onClick={click}>
      {text}
    </button>
  );
}
