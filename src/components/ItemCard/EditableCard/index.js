/* eslint-disable camelcase */
// import modules
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import actions
import { actionFillProductInputs, actionsDeleteProduct } from '../../../actions/product';
import { actionProductEditionToggleOn } from '../../../actions/toggle';
import { actionKillSpinner } from '../../../actions/appLvl';

// import component
import StaticPhoto from '../StaticPhoto';
import StaticText from '../StaticText';
import ItemEditFields from './ItemEditFields';
import UpPhoto from '../../UpPhoto';
// import EditingItemCard from './EditingItemCard';

// Selectors
import { selectorOneProduct } from '../../../selectors';

import './style.scss';
import '../style.scss';

const EditableCard = ({ productId }) => {
  const dispatch = useDispatch();
  // state
  const product = useSelector(selectorOneProduct(productId));
  // console.log(product);

  const {
    name, image, type, price, price_kg, detail,
  } = product;
  // console.log("image", image);
  // console.log("price_kg in ItemCard Comp",price_kg);
  const toggle = useSelector((state) => state.toggle.products[productId]);

  // Funtions handle
  const handleClickEdit = () => {
    /* we make a copy to keep state consistent */
    dispatch(actionFillProductInputs({ ...product }));
    dispatch(actionProductEditionToggleOn(productId));
  };
  const handleClickDelete = () => {
    dispatch(actionsDeleteProduct(productId));
  };

  const handleCloseSpinner = () => {
    // console.log("CLOSE SPINNER");
    // console.log(actionKillSpinner(productId));
    dispatch(actionKillSpinner(productId));
  };

  return (
    <article className="itemcard">
      <StaticPhoto src={image} alt={name} onLoad={handleCloseSpinner}>
        <UpPhoto productId={productId} className="edit-product__image__btn" spinnerColor="green" />
      </StaticPhoto>
      {
        !toggle ? (
          <>
            <StaticText name={name} type={type} price={price} priceUnit={price_kg} detail={detail}>
              <div className="itemcard__btn">
                <button type="button" onClick={handleClickEdit} className="itemcard__btn--edit">
                  <i className="fas fa-edit" />
                </button>
                <button type="button" onClick={handleClickDelete} className="itemcard__btn--delete">
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            </StaticText>
          </>
        )
          : <ItemEditFields productId={productId} />
      }
    </article>
  );
};

EditableCard.propTypes = {
  productId: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  // price: PropTypes.string.isRequired,
  // priceUnit: PropTypes.bool.isRequired,
  // detail: PropTypes.string.isRequired,
};

export default EditableCard;
