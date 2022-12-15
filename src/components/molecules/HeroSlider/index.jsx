import Slider from 'components/atoms/Slider';
import './_heroslider.scss';

export default function HeroSlider() {
  return (
    <div className="hero__slider">
      <p>Compatible With</p>
      <Slider />
    </div>
  );
}
