import Navigation from 'components/molecules/Navigation';
import Logo from 'images/Logo.png';
import './_navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="" srcSet="" />
      <Navigation />
    </div>
  );
}
