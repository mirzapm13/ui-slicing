import Navigation from 'components/molecules/Navigation';
import Logo from 'images/Logo.png';
import './_header.scss';

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="" srcSet="" />
      <Navigation />
    </header>
  );
}
