import ThirdPayment from '../../molecules/ThirdPayment';

import './_third.scss';

export default function Third() {
  return (
    <section className="third">
      <div className="third__main">
        <h2>
          Supported Payment
          <br />
          Methods
        </h2>
        <ThirdPayment />
      </div>
    </section>
  );
}
