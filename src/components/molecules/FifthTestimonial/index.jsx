/* eslint-disable max-len */
import TestimonialCard from 'components/atoms/TestimonialCard';
import profile1 from 'images/profile/jess_muntenaar.png';
import profile2 from 'images/profile/danny_coppenrath.png';
import './_fifthtestimonial.scss';

export default function FifthTestimonial() {
  const data = [
    {
      name: 'Jess Muntenaar',
      photo: profile1,
      organisation: 'Rembrandt',
      text: "HenriPay is my go-to service provider; over the last few months, they haven't failed at their service delivery one time. I occasionally use them to purchase or sell NFTs; I highly recommend HenriPay. Great job, HenriPay!",
      time: '7:47 PM',
    },
    {
      name: 'Danny Coppenrath',
      photo: profile2,
      organisation: 'MentorCalls',
      text: 'HenriPay made it possible for us to target traditional consumers that have no cryptocurrencies or wallets. This gave us access to a much broader market of buyers and helped us a lot in selling our NFT collection.',
      time: '7:47 PM',
    },
  ];

  return (
    <div className="testimonial">
      <div className="testimonial-title">
        <p>Testimonials</p>
        <h2>What People Think About HenriPay</h2>
      </div>
      {data.map((profile) => (
        <TestimonialCard
          className="testimonial-card"
          name={profile.name}
          photo={profile.photo}
          organisation={profile.organisation}
          text={profile.text}
          time={profile.time}
        />
      ))}
    </div>
  );
}
