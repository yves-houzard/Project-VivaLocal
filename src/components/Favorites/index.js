import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetFavorites } from '../../actions/user';

// Import component :
import Card from '../Card';

// Import local :
import './style.scss';

const Favorites = () => {
  const dispatch = useDispatch();

  const { favorite, nbrFav } = useSelector((state) => state.user);
  // console.log('Favorites : ', favorite);

  useEffect(() => {
    dispatch(actionGetFavorites());
  }, []);

  return (
    <div className="favorites">
      <h2 className="favorites__title">Mes favoris</h2>
      <div className="favorites__card">
        {
          favorite.map((el) => (
            <Card
              {...el}
              nbrFav={nbrFav}
              key={el.company_id}
              route={`/pro/${el.company_id}`}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Favorites;
