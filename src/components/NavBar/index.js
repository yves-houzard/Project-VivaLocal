// import module
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import actions
import { actionsToggleBurger } from '../../actions/toggle';

// style
import './style.scss';

export default function NavBar() {
  const dispatch = useDispatch();
  const activeMenu = useSelector((state) => state.toggle.activeMenu);
  const token = useSelector((state) => state.authent.token);
  const { pseudo, role } = useSelector((state) => state.user);
  // Calling the active NavLink class
  const getActiveClassname = ({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link');
  const handleClicktoogle = () => {
    dispatch(actionsToggleBurger(activeMenu));
  };
  return (
    <nav className="navbar">
      <NavLink
        onClick={handleClicktoogle}
        // getActiveClassname for the active NavLink
        className={getActiveClassname}
        // router
        to="/"
      >
        Accueil
      </NavLink>

      {
        (role === 'user' || role === 'pro') && (
          <>
            <NavLink
              onClick={handleClicktoogle}
              className={getActiveClassname}
              to="/search"
            >
              Recherche
            </NavLink>
            <NavLink
              onClick={handleClicktoogle}
              className={getActiveClassname}
              to="/favorites"
            >
              Favoris
            </NavLink>
          </>
        )
      }
      {
        role === 'pro' && (
          <>
            <NavLink
              onClick={handleClicktoogle}
              className={getActiveClassname}
              to="/pro/mycompany"
            >
              Ma société
            </NavLink>
          </>
        )
      }
      {
        token && token !== 'null' ? (
          <NavLink
            onClick={handleClicktoogle}
            className="navbar__link --register"
            to="/my-profile"
          >
            {pseudo}
          </NavLink>
        )
          : (
            <NavLink
              onClick={handleClicktoogle}
              className="navbar__link --register"
              to="/register"
            >
              Créer un compte
            </NavLink>
          )
      }
    </nav>
  );
}
