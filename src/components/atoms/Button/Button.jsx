import React from 'react';
import './Button.scss'

export default function Button({ text }) {
  return (
    <div className="button-outline">
      <button className="button" type="button">{text}</button>
    </div>
  )
}
