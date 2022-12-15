import './_fourthblockchain.scss';
import elipse1 from 'images/Ellipse 11.svg';
import elipse2 from 'images/Ellipse 12.svg';
import Blockchain from 'images/computer-illustration.png';

export default function FourthBlockchain() {
  return (
    <div className="blockchain">
      <div className="blockchain-container">
        <img className="blockchain-container-elipse-1" src={elipse1} alt="" />
        <img className="blockchain-container-elipse-2" src={elipse2} alt="" />
        <img className="blockchain-image" src={Blockchain} alt="" />
        <div className="blockchain-container-title">
          <h3>Multi-chain, Multi-payments, everything is possible with HenriPay.</h3>
          <p>
            Give your customers the ability to buy with different blockchains and most of the traditional payment
            methods.
          </p>
        </div>
      </div>
    </div>
  );
}
