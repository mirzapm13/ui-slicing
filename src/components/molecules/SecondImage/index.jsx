import Maze from 'images/without_henripay.png';
import vs from 'images/vs.png';
import Flow from 'images/with_henripay.png';
import './_secondimage.scss';

export default function SecondImage() {
  return (
    <div className="content">
      <div className="content-with">
        <div className="pills">Without Henripay</div>
        <img src={Maze} alt="" />
      </div>
      <div className="content-vs">
        <img src={vs} alt="" />
      </div>
      <div className="content-without">
        <div className="pills">With Henripay</div>
        <img src={Flow} alt="" />
      </div>
    </div>
  );
}
