import Button from 'components/atoms/Button';
import './_navigation.scss';
import ContactModal from 'components/organisms/ContactModal';
import Check from 'images/check.svg';
import Dropdown from 'images/dropdown-toggle.png';
import Contact from 'images/contact-us.png';
import { useState } from 'react';
import useContactModal from '../../../hooks/useContactModal';
import CommonModal from '../../organisms/CommonModal';
import useCommonModal from '../../../hooks/useCommonModal';

export default function Navigation() {
  const { isShowing, toggle } = useContactModal();
  const { isShowing: commonModalShowing, toggle: commonModalToggle } = useCommonModal();
  const [dropdown, setDropdown] = useState(false);

  const submitHandler = () => {
    toggle();
    commonModalToggle();
  };

  return (
    <>
      <nav className="normal">
        <ul>
          <li className="list-item">How It Works</li>
          <li className="list-item">How To Get It</li>
          <li className="list-item">Testimonials</li>
          <li className="list-icon">
            <img
              src={Dropdown}
              alt="dropdown-toggle-button"
              onClick={() => setDropdown(!dropdown)}
              role="presentation"
            />
          </li>
          <li className="list-button">
            <Button text="Contact Us" click={toggle} addClass="desktop-button" />
            <img src={Contact} alt="" onClick={toggle} role="presentation" className="mobile-button" />
          </li>
        </ul>
      </nav>

      <nav className={`dropdown${dropdown ? ' active' : ''}`}>
        <a href="/">How It Works</a>
        <a href="/">How To Get It</a>
        <a href="/">Testimonial</a>
      </nav>

      <ContactModal isShowing={isShowing} hide={toggle} btnClick={submitHandler} />
      <CommonModal isShowing={commonModalShowing} hide={commonModalToggle} icon={Check} heading="Sent Succesfully!" />
    </>
  );
}
