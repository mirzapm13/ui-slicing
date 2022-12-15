import Button from 'components/atoms/Button';
import './_navigation.scss';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>How It Works</li>
        <li>How To Get It</li>
        <li>Testimonials</li>
        <li>
          <Button text="Contact Us" />
        </li>
      </ul>
    </nav>
  );
}
