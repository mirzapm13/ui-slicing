import React from 'react';
import './_button.scss';

export default function Button({ text, click }) {
  return (
    <div className="border-gradient">
      <div className="border-transparent">
        <button className="button" type="button" onClick={click}>
          {text}
        </button>
      </div>
    </div>
  );
}
