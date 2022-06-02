// import module :
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import components
import MapComponent from '../MapComponent';
// import SearchResult from './SearchResult';

// import actions
import {
  actionSearchSubmit, actionLocate, actionGetPro,
} from '../../actions/search';
// import { actionCheckAccess } from '../../actions/navigate';

// import components
import AppInput from '../AppInput';

// import style
import './style.scss';

export default function Search() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.searchInput);
  const { token } = useSelector((state) => state.authent);

  // const handleChange = (e) => {
  //   dispatch(actionSearch(e.target.value));
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(actionSearchSubmit());
  };

  const handleLocate = () => {
    dispatch(actionLocate(true));
  };

  /* Check access : if valid, continue, else redirect */
  useEffect(() => {
    // dispatch(actionCheckAccess());
    // launches the query to retrieve Pro :
    if (token) dispatch(actionGetPro());
  }, [token]);

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSearch}>
        <button type="button" className="search__locate-btn" onClick={handleLocate}>
          <i className="fas fa-street-view --custom" />
        </button>
        <AppInput
          value={inputValue}
          placeholder="Ville ou Code postal"
          name="search"
          // onChange={handleChange}
          className="search__input"
          nameSpace="search"
        />
        <button className="search__btn" type="submit">Go !</button>
      </form>
      <div className="search__leaflet">
        <MapComponent />
      </div>
      {/* Add condition si taille de fenetre */}
      {
        // <SearchResult list={[]} />
      }
    </div>
  );
}
