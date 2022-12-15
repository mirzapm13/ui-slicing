import Exit from 'images/exit.svg';
import Logo from 'images/Logo.svg';

export default function CookiesModal() {
  return (
    <div className="cookies-modal">
      <img src={Exit} alt="" />
      <div className="cookies-modal__form">
        <img src={Logo} alt="" />
        <h2>Get in touch with our specialists about your project.</h2>
        <form method="POST">
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
            <input type="textarea" id="phone" />
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
