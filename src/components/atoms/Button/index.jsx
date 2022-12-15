import React from 'react';
import './_button.scss';

export default function Button({ text }) {
  return (
    <button className="button" type="button">
      {text}
    </button>
  );
}
