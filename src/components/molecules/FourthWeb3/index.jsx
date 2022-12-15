import './_fourthweb3.scss';
import elipse1 from 'images/Ellipse 11.svg';
import elipse2 from 'images/Ellipse 12.svg';
import Bitcoin from 'images/bitcoin.png';

export default function FourthWeb3() {
  return (
    <div className="web3">
      <div className="web3-container">
        <img className="web3-container-elipse-1" src={elipse1} alt="" />
        <img className="web3-container-elipse-2" src={elipse2} alt="" />
        <div className="web3-container-title">
          <h3>Sell your web3 products to anyone.</h3>
          <p>
            Web3 is changing the way products are marketed. As a leading payment service provider with software
            specifically designed for web3 payments, we support suppliers of web3 products with a prompt payment
            solution that does not reject any payment method (local or coins).
          </p>
        </div>
      </div>

      <img className="web3-image" src={Bitcoin} alt="" />
    </div>
  );
}
