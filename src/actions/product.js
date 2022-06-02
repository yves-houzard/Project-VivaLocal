import { productT } from '../action-types';

export const actionsProductRegister = () => ({
  type: productT.REGISTER,
});

export const actionsProductSuccess = (payload) => ({
  type: productT.SUCCESS_REGISTER,
  payload,
});

export const actionsProductFail = () => ({
  type: productT.FAIL_REGISTER,
});

export const actionsDeleteProduct = (payload) => ({
  type: productT.DELETE,
  payload,
});

export const actionsDelectProductSucess = (payload) => ({
  type: productT.SUCCESS_DELETE,
  payload,
});

export const actionsProductEditingInput = (payload) => ({
  type: productT.INPUT_EDITING,
  payload,
});

export const actionsProductDisplay = (payload) => ({
  type: productT.GET_PRODUCT,
  payload,
});

/* product MUST be a copy and not State Object reference */
export const actionFillProductInputs = (product) => {
  /* we get id for nameSpace naming */
  const { id } = product;
  /* we delete useless properties */
  delete product.id;
  delete product.image;
  return ({
    type: productT.FILL_EDIT_PRODUCT_FORM,
    payload: { nameSpace: `editProduct-${id}`, inputs: product },
  });
};

/* action for product edition attempt */
export const actionUpdateItemCard = (payload) => ({
  type: productT.UPDATE_TRY,
  payload,
});

/* action for product edition success */
export const actionUpdateItemCardSuccess = (payload) => ({
  type: productT.UPDATE_SUCCESS,
  payload,
});
