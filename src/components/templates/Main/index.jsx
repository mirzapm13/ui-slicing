import Header from 'components/organisms/Header';
import Hero from 'components/organisms/Hero';
import Second from 'components/organisms/Second';
import Third from 'components/organisms/Third';
import Fourth from 'components/organisms/Fourth';
import Fifth from 'components/organisms/Fifth';
import Footer from 'components/organisms/Footer';
import CommonModal from 'components/organisms/CommonModal';
import { useEffect } from 'react';
import useCommonModal from '../../../hooks/useCommonModal';

import './_main.scss';

export default function Main() {
  const { isShowing, toggle } = useCommonModal();

  useEffect(() => {
    toggle();
  }, []);

  return (
    <div className="main">
      <Header />
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />

      <CommonModal isShowing={isShowing} hide={toggle} />
    </div>
  );
}
