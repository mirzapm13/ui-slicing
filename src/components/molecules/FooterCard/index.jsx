import './_footercard.scss';
import Logo from 'images/Logo.svg';
import Instagram from 'images/instagram.svg';
import Twitter from 'images/twitter.svg';
import LinkedIn from 'images/linkedin.svg';
import elipse1 from 'images/Ellipse 9.svg';
import elipse2 from 'images/Ellipse 10.svg';

export default function FooterCard() {
  return (
    <div className="footer-card">
      <img className="elipse-1" src={elipse1} alt="" />
      <img className="elipse-2" src={elipse2} alt="" />
      <img className="footer-card__logo" src={Logo} alt="" />
      <p className="footer-card__text">
        You can now access 99% of your customers without cryptocurrency. We&apos;re Europe&apos;s #1 payment service
        that receives payments for web3 products and NFTs in local fiat. Our motivation is far-fetched; as entrepreneurs
        involved with web3, cryptocurrency and NFTs, we have suffered from payment glitches ourselves. Now we have
        created a market solution to solve this problem, HenriPay.
      </p>
      <div className="footer-card__link">
        <p>© 2022 HenriPay</p>
        <a href="ty">Disclaimer</a>
        <a href="ty">Terms & Conditions</a>
        <a href="ty">Privacy Policy</a>
        <a href="ty">Blogs</a>
      </div>
      <div className="footer-card__social">
        <p>Follow Us</p>
        <div className="footer-card__social-logo">
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
      </div>
    </div>
  );
}
