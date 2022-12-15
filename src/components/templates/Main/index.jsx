import Header from 'components/organisms/Header';
import Hero from 'components/organisms/Hero';
import Second from 'components/organisms/Second';
import Third from 'components/organisms/Third';
import Fourth from 'components/organisms/Fourth';
import Fifth from 'components/organisms/Fifth';
import Footer from 'components/organisms/Footer';
import CookiesModal from 'components/organisms/CookiesModal';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
      <CookiesModal />
    </div>
  );
}
