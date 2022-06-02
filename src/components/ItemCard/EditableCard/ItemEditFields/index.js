/* eslint-disable camelcase */
// import module
import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import component
import AppInput from '../../../AppInput';
import ButtonUI from '../../../ButtonUI';
import AppTextarea from '../../../AppTextarea';

// import actions
import { actionSetInput } from '../../../../actions/appLvl';
import { actionProductEditionToggleOff } from '../../../../actions/toggle';
import { actionUpdateItemCard } from '../../../../actions/product';

// tools
import { normalizeBoolean } from '../../../../tools';

// style
import '../style.scss';
import { selectorOneProduct, selectorOneProductInputs } from '../../../../selectors';

const ItemEditFields = ({ productId }) => {
  // const product = useSelector(selectorOneProduct(productId));
  // const toggle = useSelector((state) => state.toggle.products[productId]);
  const nameSpace = `editProduct-${productId}`;
  const { price_kg } = useSelector(selectorOneProductInputs(productId));
  console.log('price_kg check', price_kg);
  const dispatch = useDispatch();

  // Function Handle
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log("productId in ItemEditFields",productId);
    console.log(e.target);
    dispatch(actionUpdateItemCard(productId));
    dispatch(actionProductEditionToggleOff(productId));
  };
  const handleChangeRadio = (e) => {
    const boolValue = normalizeBoolean(e.target.value);
    console.log('check unit', boolValue);
    dispatch(actionSetInput(`editProduct-${productId}`, 'price_kg', boolValue));
  };
  const handleClickCancel = () => {
    // console.log(`CANCEL ${productId}`);
    dispatch(actionProductEditionToggleOff(productId));
  };

  return (
    <>
      <h3 className="edit-product__title"> Édition </h3>
      <form className="edit-product__form" onSubmit={handleSubmitForm}>
        <div className="edit-product__input-box">
          <AppInput
            name="name"
            className="edit-product__field"
            nameSpace={nameSpace}
            placeholder="Nom du produit"
            required
          />
          <AppInput
            name="type"
            type="text"
            className="edit-product__field"
            nameSpace={nameSpace}
            placeholder="Type de produit"
            required
          />
          <AppTextarea
            name="detail"
            className="edit-product__textarea"
            nameSpace={nameSpace}
            placeholder="Description"
          // defaultValue=""
          />
          <div className="edit-product__input--radio">
            <label htmlFor="edit-product-unitKg">
              <input
                type="radio"
                id="edit-product-unitKg"
                name="price_kg"
                // eslint-disable-next-line react/jsx-boolean-value
                value={true}
                onChange={handleChangeRadio}
                checked={price_kg}
              />
              Kilo
            </label>
            <label htmlFor="edit-product-unitPc">
              <input
                type="radio"
                id="edit-product-unitPc"
                name="price_kg"
                value={false}
                onChange={handleChangeRadio}
                // eslint-disable-next-line no-unneeded-ternary
                checked={price_kg ? false : true}
              />
              Pièce
            </label>
          </div>
          <AppInput
            value=""
            type="number"
            name="price"
            className="edit-product__field"
            nameSpace={nameSpace}
            placeholder="Prix"
            required
          />
          {/* <div className="edit-product__btn__box"> */}
          <ButtonUI
            type="submit"
            className="edit-product__btn --larger"
          >
            Valider
          </ButtonUI>
          <ButtonUI
            type="button"
            className="edit-product__btn"
            onClick={handleClickCancel}
          >
            Cancel
          </ButtonUI>
          {/* </div> */}
        </div>
      </form>
    </>
  );
};

ItemEditFields.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default ItemEditFields;
