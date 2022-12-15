import FifthTestimonial from 'components/molecules/FifthTestimonial';
import FifthBusiness from 'components/molecules/FifthBusiness';
import './_fifth.scss';

export default function Fifth() {
  return (
    <section className="fifth">
      <div className="fifth__main">
        <FifthTestimonial />
        <FifthBusiness />
      </div>
    </section>
  );
}
