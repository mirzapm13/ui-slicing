import './_hero.scss';
import HeroContent from 'components/molecules/HeroContent';
import HeroSlider from 'components/molecules/HeroSlider';
import elipse1 from 'images/Vector 1.svg';
import elipse2 from 'images/Vector 11.svg';

export default function Hero() {
  return (
    <section className="hero">
      <img className="elipse-1" src={elipse1} alt="" />
      <img className="elipse-2" src={elipse2} alt="" />
      <HeroContent />
      <HeroSlider />
    </section>
  );
}
