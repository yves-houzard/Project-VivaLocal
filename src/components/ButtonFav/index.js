import PropTypes from 'prop-types';

const ButtonFav = ({ pathImage, fav }) => (
  <div
    className="displaycompany__favorites"
    onClick={fav}
  >
    <img
      src={pathImage}
      alt={pathImage === '/images/70f5a46b1d833bcf1290.png' ? 'Add to Favorites' : 'Remove from favorite'}
      className="displaycompany__favorites__img"
    />
  </div>
);

ButtonFav.propTypes = {
  pathImage: PropTypes.string.isRequired,
  fav: PropTypes.func.isRequired,
};

export default ButtonFav;
