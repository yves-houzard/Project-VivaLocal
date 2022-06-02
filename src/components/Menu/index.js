// import module
import { useSelector, useDispatch } from 'react-redux';
import { actionsToggleBurger } from '../../actions/toggle';

// import component
import NavBar from '../NavBar';
import Authent from '../Authent';
// style
import './style.scss';

export default function BurgerMenu() {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.toggle.activeMenu);
  const classBurger = activeMenu ? 'menu__box menu__box--active' : 'menu__box';
  const classMenu = activeMenu ? 'menu__content menu__content--active' : 'menu__content';
  const handleClickBurger = () => {
    dispatch(actionsToggleBurger(activeMenu));
  };
  return (
    <div className="menu">
      <button type="button" onClick={handleClickBurger} className={classBurger}>
        <div className="menu__box--container">
          <div className="menu__box--line" />
          <div className="menu__box--line" />
          <div className="menu__box--line" />
        </div>
      </button>
      <div className={classMenu}>
        <Authent />
        <NavBar />
      </div>
    </div>

  );
}
