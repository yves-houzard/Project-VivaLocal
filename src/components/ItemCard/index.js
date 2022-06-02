import PropTypes from 'prop-types';

// components
import StaticText from './StaticText';
import StaticPhoto from './StaticPhoto';

import './style.scss';

const ItemCard = ({
  id,
  name,
  type,
  price,
  priceUnit,
  detail,
  src,
}) => (
  <article className="itemcard">
    <StaticPhoto src={src} alt={name} />
    <StaticText
      key={id}
      name={name}
      type={type}
      price={price}
      priceUnit={priceUnit}
      detail={detail}
    />
  </article>
);

export default ItemCard;

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceUnit: PropTypes.bool.isRequired,
  detail: PropTypes.string.isRequired,
};

ItemCard.defaultProps = {
  src: undefined,
};
