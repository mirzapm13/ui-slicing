import './_testimonialcard.scss';

export default function TestimonialCard({ name, organisation, photo, text, time }) {
  return (
    <div className="card">
      <div className="card-title">
        <img src={photo} alt="" />
        <div className="card-title-bio">
          <p className="name">{name}</p>
          <p className="organisation">{organisation}</p>
        </div>
      </div>

      <div className="card-text">
        <p className="longtext">{text}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
}
