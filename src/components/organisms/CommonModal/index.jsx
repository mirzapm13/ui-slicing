/* eslint-disable indent */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent */
import { createPortal } from 'react-dom';
import Exit from 'images/exit.svg';
import elipse1 from 'images/Ellipse 10.svg';
import Button from 'components/atoms/Button';
import './_commonmodal.scss';
import { useEffect } from 'react';

export default function CommonModal({ isShowing, hide, icon, heading, text, button, btnClick }) {
  const handleEsc = (e) => {
    if (isShowing && e.key === 'Escape') {
      hide();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false);
  }, [isShowing]);

  return isShowing
    ? createPortal(
        <>
          <div className="modal-bg" />
          <div className="modal-gradient">
            <div className="common-modal">
              <img className="elipse-1" src={elipse1} alt="" />
              <img className="exit-img" src={Exit} alt="" onClick={hide} />
              <img className="icon" src={icon} alt="" />
              <h2>{heading}</h2>
              {text && <p>{text}</p>}
              {button && <Button text={button} click={btnClick} />}
            </div>
          </div>
        </>,
        document.body,
      )
    : null;
}
