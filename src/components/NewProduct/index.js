// import module
import { useDispatch } from 'react-redux';
// import actions
// import { actionsInputRadio } from '../../actions/appLvl';
import { actionSetInput } from '../../actions/appLvl';
import { actionsProductRegister } from '../../actions/product';
import { actionToggleOff } from '../../actions/toggle';
// import component
import AppInput from '../AppInput';
import ButtonUI from '../ButtonUI';

// import field input
import fields from './fields.config';

// style
import './style.scss';

export default function NewProduct() {
  const dispatch = useDispatch();
  // const normalizeBoolean = (value) => {
  //   if (value === 'true') {
  //     return true;
  //   }
  //   if (value === 'false') {
  //     return false;
  //   }
  //   return value;
  // };
  // function Handle
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(actionsProductRegister());
    dispatch(actionToggleOff('registerProduct'));
    // navigate('/pro/mycompany');
  };
  const handleClickCancel = () => {
    // navigate('/pro/mycompany');
    dispatch(actionToggleOff('registerProduct'));
  };
  const handleChangeRadio = (e) => {
    dispatch(actionSetInput('productRegister', 'price_kg', e.target.value));
  };
  return (
    <form className="new-product" onSubmit={handleSubmitForm}>
      {/* <div className="new-product__title">
        Créer un produit
      </div> */}
      <div className="new-product__input">
        {fields.map((field) => (
          <AppInput
            {...field}
            key={`new-product__${field.name}`}
            className="new-product__field"
            nameSpace="productRegister"
          />
        ))}
        <AppInput
          value=""
          type="number"
          name="price"
          className="new-product__field"
          nameSpace="productRegister"
          placeholder="Prix"
          required
        />
        <div className="new-product__input--radio">
          <label htmlFor="product-register-price_kg">
            <input
              type="radio"
              id="product-register-price_kg"
              name="price_kg"
              // eslint-disable-next-line react/jsx-boolean-value
              value={true}
              onChange={handleChangeRadio}
              defaultChecked
            />
            Kilo
          </label>
          <label htmlFor="product-register-price_pc">
            <input
              type="radio"
              id="product-register-price_pc"
              name="price_kg"
              value={false}
              onChange={handleChangeRadio}
            />
            Pièce
          </label>
        </div>
        <div className="new-product__btn">
          <ButtonUI
            type="submit"
            className="new-product__btn-form"
          >
            Valider
          </ButtonUI>
          <ButtonUI
            type="button"
            className="new-product__btn-form"
            onClick={handleClickCancel}
          >
            Annuler
          </ButtonUI>
        </div>
      </div>
    </form>
  );
}
