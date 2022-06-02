// modules
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// import routes
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

// import components
import AppHeader from '../AppHeader';
import Home from '../Home';
import MyCompany from '../MyCompany';
import Search from '../Search';
import AppFooter from '../AppFooter';
import RegisterForm from '../RegisterForm';
import NewCompany from '../NewCompany';
import Favorites from '../Favorites';
import NewProduct from '../NewProduct';
import UpdateUser from '../UpdateUser';
import E404 from '../E404';
import DisplayCompany from '../DisplayCompany';
import AboutUS from '../AboutUs';

// style
import './style.scss';

// actions
import { actionAuthentWithToken } from '../../actions/authent';
import { actionRequestError } from '../../actions/appLvl';

// import { actionGoToDefault } from '../../actions/navigate';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.authent);
  const { role } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.appLvl);

  /* We authent user with token if possible */
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('maraicher'));
    if (storedData && storedData !== 'null') {
      dispatch(actionAuthentWithToken(storedData));
    }
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(actionRequestError(''));
    }, 3000);
  }, [error]);

  /* When token changes and is set, we go to default start page */
  useEffect(() => {
    /*  if there is a token in state, go to search page
    loading of search page will check access,
    please have a look at search component and access middleware.
     */
  }, [role]);

  return (
    <div className="app">
      <ToastContainer />
      <AppHeader />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/search"
            element={<Search />}
          />
          <Route
            path="/pro/mycompany"
            element={<MyCompany />}
          />
          <Route
            path="/register"
            element={<RegisterForm />}
          />
          <Route
            path="/register-company"
            element={<NewCompany />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
          <Route
            path="/register-product"
            element={<NewProduct />}
          />
          <Route
            path="/pro/:idPro"
            element={<DisplayCompany />}
          />
          <Route
            path="/my-profile"
            element={<UpdateUser />}
          />
          <Route
            path="*"
            element={<E404 />}
          />
          <Route
            path="/aboutus"
            element={<AboutUS />}
          />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
