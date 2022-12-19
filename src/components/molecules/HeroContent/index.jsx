import Button from 'components/atoms/Button';
import Macbook from 'images/Macbook-Pro-Mockup.png';
import './_herocontent.scss';
import ContactModal from 'components/organisms/ContactModal';
import Check from 'images/check.svg';
import useContactModal from '../../../hooks/useContactModal';
import CommonModal from '../../organisms/CommonModal';
import useCommonModal from '../../../hooks/useCommonModal';

export default function HeroContent() {
  const { isShowing, toggle } = useContactModal();
  const { isShowing: commonModalShowing, toggle: commonModalToggle } = useCommonModal();

  const submitHandler = () => {
    toggle();
    commonModalToggle();
  };

  return (
    <>
      <div className="hero__main">
        <div className="hero__main__content">
          <h1>
            <span>Selling NFTs</span>
            <br />
            Made Easy As a Pie.
          </h1>
          <p>
            Selling NFTs is not easy. 99% of your potential customers don&apos;t have cryptocurrencies at hand and thus
            drop out. Until now, Because with HenriPay you can sell NFTs to anyone - with their preferred local payment
            method. Imagine how your market potential just multiplied!
          </p>
          <div className="more-info">
            <Button text="Use Henripay" click={() => toggle()} />
            <a href="test">More Information</a>
          </div>
        </div>
        <div className="hero__main__img">
          <img src={Macbook} alt="" />
        </div>
      </div>

      <ContactModal isShowing={isShowing} hide={toggle} btnClick={submitHandler} />
      <CommonModal isShowing={commonModalShowing} hide={commonModalToggle} icon={Check} heading="Sent Succesfully!" />
    </>
  );
}
