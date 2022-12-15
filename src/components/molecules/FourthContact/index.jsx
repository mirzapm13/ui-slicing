import Button from 'components/atoms/Button';
import './_fourthcontact.scss';

import HowTo from 'images/integrate_henripay.png';
import elipse1 from 'images/Ellipse 13.png';
import elipse2 from 'images/Ellipse 18.png';
import logo from 'images/Logo-2.png';
import Man from 'images/portrait-young-african-american-man-with-vr-glasses 2.png';

export default function FourthContact() {
  return (
    <div className="contact">
      <img className="contact-howto" src={HowTo} alt="" />
      <div className="contact-vr">
        <img className="contact-vr-elipse-1" src={elipse1} alt="" />
        <img className="contact-vr-elipse-2" src={elipse2} alt="" />
        <img className="contact-vr-logo" src={logo} alt="" />
        <img className="contact-vr-man" src={Man} alt="" />
        <h3>Buy NFTs or Crypto simple and with the payment method YOU are most comfortable with</h3>
        <p>Contact us now!</p>
        <Button text="Contact Us" />
      </div>
    </div>
  );
}
