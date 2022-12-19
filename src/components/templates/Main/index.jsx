import Navbar from 'components/organisms/Navbar';
import Hero from 'components/organisms/Hero';
import Second from 'components/organisms/Second';
import Third from 'components/organisms/Third';
import Fourth from 'components/organisms/Fourth';
import Fifth from 'components/organisms/Fifth';
import Footer from 'components/organisms/Footer';
import CommonModal from 'components/organisms/CommonModal';
import { useEffect } from 'react';
import Cookie from 'images/cookie.svg';
import useCommonModal from '../../../hooks/useCommonModal';

import './_main.scss';

export default function Main() {
  const { isShowing, toggle } = useCommonModal();

  useEffect(() => {
    toggle();
  }, []);

  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />

      <CommonModal
        isShowing={isShowing}
        hide={toggle}
        icon={Cookie}
        heading="COOKIES!"
        text='We use cookies to collect data to improve your experience. Select "Accept All" to allow them to be used.'
        button="Accept All Cookies"
        btnClick={toggle}
      />
    </div>
  );
}
