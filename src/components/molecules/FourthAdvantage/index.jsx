import './_fourthadvantage.scss';
import Phone from 'images/phone.png';

export default function FourthAdvantage() {
  return (
    <div className="advantage">
      <img className="advantage-image" src={Phone} alt="" />
      <div className="advantage-text">
        <p>Our Advantages</p>
        <h3>HenriPay Advantages</h3>
        <ul>
          <li>Convert more customers</li>
          <li>Target traditional customers</li>
          <li>Full support and guidance included</li>
          <li>Whitelabel and Branding in your style</li>
        </ul>
      </div>
    </div>
  );
}
