import SecondTitle from 'components/molecules/SecondTitle';
import SecondSubtext from 'components/molecules/SecondSubtext';
import SecondImage from 'components/molecules/SecondImage';
import './_second.scss';
import elipse1 from 'images/Ellipse 9.svg';
import elipse2 from 'images/Ellipse 10.svg';

export default function Second() {
  return (
    <section className="second">
      <div className="second__main">
        <img className="elipse-1" src={elipse1} alt="" />
        <img className="elipse-2" src={elipse2} alt="" />
        <SecondTitle />
        <SecondImage />
        <SecondSubtext />
      </div>
    </section>
  );
}
