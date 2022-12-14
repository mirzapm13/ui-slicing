/* eslint-disable indent */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-indent */
import Exit from 'images/exit.svg';
import Logo from 'images/Logo.svg';
import elipse1 from 'images/Ellipse 10.svg';
import './_contactmodal.scss';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from 'components/atoms/Button';

export default function ContactModal({ isShowing, hide, btnClick }) {
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
          <div className="modal-bg" onClick={hide} role="presentation" />
          <div className="modal-gradient">
            <div className="contact-modal">
              <img className="elipse-1" src={elipse1} alt="" />
              <img className="exit-img" src={Exit} alt="" onClick={hide} />
              <img className="logo" src={Logo} alt="" />
              <h2>Get in touch with our specialists about your project.</h2>
              <div className="contact-modal__form">
                <form className="form">
                  <div className="form-name">
                    <label htmlFor="name">
                      Your Name
                      <span>*</span>
                    </label>
                    <input type="text" id="name" />
                  </div>
                  <div className="form-email">
                    <label htmlFor="email">
                      Email
                      <span>*</span>
                    </label>
                    <input type="email" id="email" />
                  </div>
                  <div className="form-phone">
                    <label htmlFor="phone">
                      Phone
                      <span>*</span>
                    </label>
                    <input type="text" id="phone" />
                  </div>
                  <div className="form-service">
                    <label htmlFor="service">Service (optional)</label>
                    <input type="text" id="service" />
                  </div>
                  <div className="form-message">
                    <label htmlFor="message">
                      Messages
                      <span>*</span>
                    </label>
                    <textarea name="message" id="message" />
                  </div>
                  <Button text="Send" click={btnClick} />
                </form>
              </div>
            </div>
          </div>
        </>,
        document.body,
      )
    : null;
}
