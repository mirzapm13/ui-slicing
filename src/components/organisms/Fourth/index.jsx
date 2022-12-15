import FourthTitle from 'components/molecules/FourthTitle';
import FourthContact from 'components/molecules/FourthContact';
import FourthAdvantage from 'components/molecules/FourthAdvantage';
import FourthWeb3 from 'components/molecules/FourthWeb3';
import FourthBlockchain from 'components/molecules/FourthBlockchain';

import './_fourth.scss';

export default function Fourth() {
  return (
    <section className="fourth">
      <div className="fourth__main">
        <FourthTitle />

        <FourthContact />

        <FourthAdvantage />

        <FourthWeb3 />

        <FourthBlockchain />
      </div>
    </section>
  );
}
