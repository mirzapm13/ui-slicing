import Button from 'components/atoms/Button';
import Macbook from 'images/Macbook-Pro-Mockup.png';
import './_herocontent.scss';

export default function HeroContent() {
  return (
    <div className="hero__main">
      <div className="hero__main__content">
        <h1>
          <span>Selling NFTs</span>
          <br />
          Made Easy As a Pie.
        </h1>
        <p>
          Selling NFTs is not easy. 99% of your potential customers don&apos;t have cryptocurrencies at hand and thus
          drop out. Until now, Because with HenriPay you can sell NFTs to anyone - with their preferred local payment
          method. Imagine how your market potential just multiplied!
        </p>
        <Button text="Use Henripay" />
        <a href="test">More Information</a>
      </div>
      <div className="hero__main__img">
        <img src={Macbook} alt="" />
      </div>
    </div>
  );
}
