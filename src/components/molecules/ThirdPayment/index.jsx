import Button from 'components/atoms/Button';

import Deal from 'images/payment_logo/Frame 4149.png';
import Giropay from 'images/payment_logo/Frame 4150.png';
import Bancontact from 'images/payment_logo/Frame 4151.png';
import Wechat from 'images/payment_logo/Frame 4152-1.png';
import Amex from 'images/payment_logo/Frame 4152.png';
import MasterCard from 'images/payment_logo/Frame 4153-1.png';
import Visa from 'images/payment_logo/Frame 4165.png';

import Solana from 'images/payment_logo/Frame 4154.png';
import Ethereum from 'images/payment_logo/Frame 4153.png';
import Bitcoin from 'images/payment_logo/Frame 4156.png';
import Theter from 'images/payment_logo/Frame 4155.png';

import elipse1 from 'images/Ellipse 11.png';
import LaptopImg from 'images/girl-is-shopping-internet.png';

import './_thirdpayment.scss';

import ContactModal from 'components/organisms/ContactModal';
import Check from 'images/check.svg';
import useContactModal from '../../../hooks/useContactModal';
import CommonModal from '../../organisms/CommonModal';
import useCommonModal from '../../../hooks/useCommonModal';

export default function ThirdPayment() {
  const { isShowing, toggle } = useContactModal();
  const { isShowing: commonModalShowing, toggle: commonModalToggle } = useCommonModal();

  const submitHandler = () => {
    toggle();
    commonModalToggle();
  };

  return (
    <>
      <div className="payment-methods">
        <img className="elipse-1" src={elipse1} alt="" />
        <img className="elipse-2" src={elipse1} alt="" />

        <div className="fiat">
          <div className="fiat__pills">Accepted FIAT Payment</div>
          <img src={Deal} alt="" />
          <img src={Giropay} alt="" />
          <img src={Bancontact} alt="" />
          <img src={Wechat} alt="" />
          <img src={Amex} alt="" />
          <img src={MasterCard} alt="" />
          <img src={Visa} alt="" />
        </div>

        <div className="illustration">
          <img src={LaptopImg} alt="" />
          <Button text="Integrate Henripay" click={toggle} />
        </div>

        <div className="blockchain-payment">
          <div className="blockchain-payment__pills">Accepted Blockchain Payment</div>
          <img src={Solana} alt="" />
          <img src={Ethereum} alt="" />
          <img src={Bitcoin} alt="" />
          <img src={Theter} alt="" />
        </div>
      </div>
      <ContactModal isShowing={isShowing} hide={toggle} btnClick={submitHandler} />
      <CommonModal isShowing={commonModalShowing} hide={commonModalToggle} icon={Check} heading="Sent Succesfully!" />
    </>
  );
}
