/* eslint-disable indent */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent */
import { createPortal } from 'react-dom';
import Exit from 'images/exit.svg';
import elipse1 from 'images/Ellipse 10.svg';
import Button from 'components/atoms/Button';

export default function CommonModal({ isShowing, hide, icon, heading, text, button }) {
  return isShowing
    ? createPortal(
        <>
          <div className="modal-bg" />
          <div className="contact-modal">
            <img className="elipse-1" src={elipse1} alt="" />
            <img className="exit-img" src={Exit} alt="" onClick={hide} />
            <img className="cookie" src={icon} alt="" />
            <h2>{heading}</h2>
            <p>{text}</p>
            {button ?? <Button text={button} click={hide} />}
          </div>
        </>,
        document.body,
      )
    : null;
}
