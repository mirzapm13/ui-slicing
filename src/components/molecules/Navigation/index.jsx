import Button from 'components/atoms/Button';
import './_navigation.scss';
import ContactModal from 'components/organisms/ContactModal';
import Check from 'images/check.svg';
import useContactModal from '../../../hooks/useContactModal';
import CommonModal from '../../organisms/CommonModal';
import useCommonModal from '../../../hooks/useCommonModal';

export default function Navigation() {
  const { isShowing, toggle } = useContactModal();
  const { isShowing: commonModalShowing, toggle: commonModalToggle } = useCommonModal();

  const submitHandler = () => {
    toggle();
    commonModalToggle();
  };

  return (
    <>
      <nav>
        <ul>
          <li>How It Works</li>
          <li>How To Get It</li>
          <li>Testimonials</li>
          <li>
            <Button text="Contact Us" click={() => toggle()} />
          </li>
        </ul>
      </nav>

      <ContactModal isShowing={isShowing} hide={toggle} btnClick={submitHandler} />
      <CommonModal isShowing={commonModalShowing} hide={commonModalToggle} icon={Check} heading="Sent Succesfully!" />
    </>
  );
}
