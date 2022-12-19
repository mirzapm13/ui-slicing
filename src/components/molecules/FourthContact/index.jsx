import Button from 'components/atoms/Button';
import './_fourthcontact.scss';

import HowTo from 'images/integrate_henripay.png';
import elipse1 from 'images/Ellipse 13.png';
import elipse2 from 'images/Ellipse 18.png';
import logo from 'images/Logo-2.png';
import Man from 'images/portrait-young-african-american-man-with-vr-glasses 2.png';

import ContactModal from 'components/organisms/ContactModal';
import Check from 'images/check.svg';
import useContactModal from '../../../hooks/useContactModal';
import CommonModal from '../../organisms/CommonModal';
import useCommonModal from '../../../hooks/useCommonModal';

export default function FourthContact() {
  const { isShowing, toggle } = useContactModal();
  const { isShowing: commonModalShowing, toggle: commonModalToggle } = useCommonModal();

  const submitHandler = () => {
    toggle();
    commonModalToggle();
  };
  return (
    <>
      <div className="contact">
        <img className="contact-howto" src={HowTo} alt="" />
        <div className="contact-vr">
          <img className="contact-vr-elipse-1" src={elipse1} alt="" />
          <img className="contact-vr-elipse-2" src={elipse2} alt="" />
          <img className="contact-vr-logo" src={logo} alt="" />
          <img className="contact-vr-man" src={Man} alt="" />
          <h3>Buy NFTs or Crypto simple and with the payment method YOU are most comfortable with</h3>
          <p>Contact us now!</p>
          <Button text="Contact Us" click={toggle} />
        </div>
      </div>

      <ContactModal isShowing={isShowing} hide={toggle} btnClick={submitHandler} />
      <CommonModal isShowing={commonModalShowing} hide={commonModalToggle} icon={Check} heading="Sent Succesfully!" />
    </>
  );
}
