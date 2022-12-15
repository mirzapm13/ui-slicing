import Button from 'components/atoms/Button';
import './_navigation.scss';
import ContactModal from 'components/organisms/ContactModal';
import useContactModal from '../../../hooks/useContactModal';

export default function Navigation() {
  const { isShowing, toggle } = useContactModal();
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

      <ContactModal isShowing={isShowing} hide={toggle} />
    </>
  );
}
