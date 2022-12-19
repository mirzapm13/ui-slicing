import Button from 'components/atoms/Button';
import './_secondsubtext.scss';
import ContactModal from 'components/organisms/ContactModal';
import Check from 'images/check.svg';
import useContactModal from '../../../hooks/useContactModal';
import CommonModal from '../../organisms/CommonModal';
import useCommonModal from '../../../hooks/useCommonModal';

export default function SecondSubtext() {
  const { isShowing, toggle } = useContactModal();
  const { isShowing: commonModalShowing, toggle: commonModalToggle } = useCommonModal();

  const submitHandler = () => {
    toggle();
    commonModalToggle();
  };
  return (
    <>
      <div className="second-subtext">
        <p className="customers">
          Tap into the 99% of your potential customers
          <br />
          that you are currently missing out on.
        </p>
        <Button text="Integrate Henripay" click={toggle} />
      </div>

      <ContactModal isShowing={isShowing} hide={toggle} btnClick={submitHandler} />
      <CommonModal isShowing={commonModalShowing} hide={commonModalToggle} icon={Check} heading="Sent Succesfully!" />
    </>
  );
}
