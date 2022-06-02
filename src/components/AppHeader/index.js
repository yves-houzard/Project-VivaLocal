import { Link } from 'react-router-dom';

import Menu from '../Menu';
import LogoSVG from '../icons/Logo';

import './style.scss';

export default function AppHeader() {
  return (
    <header className="header">
      <Link
        className="header__link"
        to="/"
      >
        {/* <img className="header__img" src={logo} alt="logo" /> */}
        <LogoSVG />
        <div className="header__title">ViveLocal</div>
      </Link>
      <Menu />
    </header>
  );
}
