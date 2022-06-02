// Imports
import PropTypes from 'prop-types';

// Components

// Styling
import '../style.scss';

const StaticText = ({ name, type, detail, price, priceUnit, children }) => (
  <>
    <div className="itemcard__content">
      <div className="itemcard__content__name">{name}</div>
      <div className="itemcard__content__type">{type}</div>
      <div className="itemcard__content__detail">{detail}</div>
      <div className="itemcard__content__price">{price} €/{priceUnit ? 'kg' : 'pièce'}</div>
    </div>
    {children}
  </>
);

StaticText.propTypes = {
  priceUnit: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  detail: PropTypes.string,
  price: PropTypes.string.isRequired,
  children: PropTypes.object || null,
};
StaticText.defaultProps = {
  detail: '',
  children: null,
};

export default StaticText;
