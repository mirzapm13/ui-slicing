import React from 'react';
import './_button.scss';

export default function Button({ text, click, addClass }) {
  return (
    <div className="border-gradient">
      <div className="border-transparent">
        <button className={`button ${addClass}`} type="button" onClick={click}>
          {text}
        </button>
      </div>
    </div>
  );
}
